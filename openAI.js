require('dotenv').config()
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY, // Replace with your API key
});



module.exports = openai;
