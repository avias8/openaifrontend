// Server.js
// This file sets up an Express server that handles requests to the OpenAI API.
// It includes middleware for CORS and JSON parsing, and defines a single POST endpoint
// that takes a prompt from the client, sends it to the OpenAI API, and returns the generated text.

const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9001;

// Create an instance of the OpenAI API client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,  // Ensure you're using your actual API key here
});

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

app.post('/openai', async (req, res) => {
    try {
        const { prompt } = req.body; // Get the prompt from the request body

        if (!prompt) {
            return res.status(400).send('Prompt is required');
        }

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }], // Use the prompt from the client
            model: 'gpt-4o-mini', // You can replace this with 'gpt-4o-mini' if needed
        });
        res.json({ generatedText: chatCompletion.choices[0].message.content }); // Send back the generated text
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong!');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
