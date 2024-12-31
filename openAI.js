const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: "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", // Replace with your API key
});



module.exports = openai;
