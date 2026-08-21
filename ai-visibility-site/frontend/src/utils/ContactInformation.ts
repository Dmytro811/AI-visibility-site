export async function sendContactInformation(contactInfo: { email: string; telegram: string; phone: string }) {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const response = await fetch(`${apiUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactInfo),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}