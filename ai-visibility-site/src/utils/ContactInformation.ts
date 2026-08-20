export async function sendContactInformation(contactInfo: { email: string; telegram: string; phone: string }) {
    const response = await fetch(
  "http://localhost:8000/api/contact",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: contactInfo.email,
      telegram: contactInfo.telegram,
      phone: contactInfo.phone,
    }),
  }
);

const data = await response.json();
return data;
}