require('dotenv').config();  // Load environment variables from .env file

const { GoogleGenerativeAI } = require('@google/generative-ai');

class GenerativeAIService {
  constructor() {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error('API_KEY is missing from environment variables');
    }
    this.client = new GoogleGenerativeAI({ apiKey });
  }

  // Correct method to generate text based on the API usage
  async generateText(prompt) {
    try {
      // Make sure to use the right method for content generation, like `createCompletion` or similar.
      const response = await this.client.createCompletion({
        model: 'gemini-pro',  // Replace with the correct model name
        prompt: prompt,
        maxOutputTokens: 256,
        temperature: 0.7,
      });

      return response.data;  // Adjust based on how the response is structured
    } catch (error) {
      console.error('Error generating text:', error);
      throw new Error('Failed to generate text');
    }
  }
}

module.exports = new GenerativeAIService();
