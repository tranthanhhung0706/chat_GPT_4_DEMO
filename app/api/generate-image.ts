// pages/api/generate-image.js
// import openai from 'openai'; 
import { openai } from "@/app/openai";
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: req.body.prompt,
        n: 1,
        size: '1024x1024',
      });

      const imageUrl = response.data[0].url;
      res.status(200).json({ imageUrl });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate image' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
