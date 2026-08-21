import os
import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from pydantic import BaseModel, EmailStr


load_dotenv()

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

if not TELEGRAM_BOT_TOKEN:
    raise RuntimeError("TELEGRAM_BOT_TOKEN is not configured")

if not TELEGRAM_CHAT_ID:
    raise RuntimeError("TELEGRAM_CHAT_ID is not configured")


limiter = Limiter(key_func=get_remote_address)
app = FastAPI(
    title="AI Visibility Contact API",
    version="1.0.0",
)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    email: EmailStr
    telegram: str
    phone: str


@app.get("/")
@limiter.limit("5/minute")
async def root():
    return {
        "status": "ok",
        "message": "AI Visibility Contact API is running",
    }


@app.post("/api/contact")
async def create_contact(contact: ContactRequest):

    message = (
        " NEW CONTACT REQUEST\n\n"
        f" Email:\n{contact.email}\n\n"
        f" Telegram:\n{contact.telegram}\n\n"
        f" Phone:\n{contact.phone}"
    )

    telegram_url = (
        f"https://api.telegram.org/bot"
        f"{TELEGRAM_BOT_TOKEN}/sendMessage"
    )

    try:
        async with httpx.AsyncClient(timeout=10) as client:

            response = await client.post(
                telegram_url,
                json={
                    "chat_id": TELEGRAM_CHAT_ID,
                    "text": message,
                },
            )

        if response.status_code != 200:
            print("Telegram error:", response.text)

            raise HTTPException(
                status_code=502,
                detail="Failed to send message to Telegram",
            )

    except httpx.RequestError as error:
        print("Request error:", error)

        raise HTTPException(
            status_code=502,
            detail="Could not connect to Telegram",
        )

    return {
        "success": True,
        "message": "Contact request sent successfully",
    }