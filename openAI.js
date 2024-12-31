const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: "XXX", // Replace with your API key
});



module.exports = openai;
