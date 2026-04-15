import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Google Sheet Integration via Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbx2eU2-GICohvK0L7tqwSGtTvXsKjv8OswLeEZhRzi21g22jtzFVKA2S1bn7wQRkaST9A/exec";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      }),
      redirect: 'follow',
    });

    const responseText = await response.text();

    if (response.ok) {
      try {
        const result = JSON.parse(responseText);
        if (result.result === 'success') {
          return res.status(200).json({ success: true });
        } else {
          return res.status(500).json({ error: `Script Error: ${result.error}` });
        }
      } catch (e) {
        if (responseText.includes('success') || responseText.includes('Script is live')) {
          return res.status(200).json({ success: true });
        }
        return res.status(500).json({ error: 'Invalid response from Google Sheets service.' });
      }
    } else {
      return res.status(500).json({ 
        error: `Google Script Error (${response.status}): ${responseText.substring(0, 100)}` 
      });
    }
  } catch (error) {
    return res.status(500).json({ 
      error: 'Network error: Could not reach the Google Sheets service. Please check your script deployment.' 
    });
  }
}
