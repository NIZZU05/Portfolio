import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Google Sheet Integration via Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbx2eU2-GICohvK0L7tqwSGtTvXsKjv8OswLeEZhRzi21g22jtzFVKA2S1bn7wQRkaST9A/exec";

    console.log('Attempting to send contact form data to Google Script:', GOOGLE_SCRIPT_URL);

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
      console.log('Raw response from Google Script:', responseText);

      if (response.ok) {
        try {
          const result = JSON.parse(responseText);
          if (result.result === 'success') {
            console.log('Successfully saved to Google Sheet');
            return res.status(200).json({ success: true });
          } else {
            console.error('Google Script execution error:', result.error);
            return res.status(500).json({ error: `Script Error: ${result.error}` });
          }
        } catch (e) {
          // If response isn't JSON, it might be a success message in plain text
          if (responseText.includes('success') || responseText.includes('Script is live')) {
            return res.status(200).json({ success: true });
          }
          console.error('Could not parse Google Script response:', responseText);
          return res.status(500).json({ error: 'Invalid response from Google Sheets service.' });
        }
      } else {
        console.error('Google Script returned an error:', response.status, responseText);
        return res.status(500).json({ 
          error: `Google Script Error (${response.status}): ${responseText.substring(0, 100)}` 
        });
      }
    } catch (error) {
      console.error('Network error connecting to Google Script:', error);
      return res.status(500).json({ 
        error: 'Network error: Could not reach the Google Sheets service. Please check your script deployment.' 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
