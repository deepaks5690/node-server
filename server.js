const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const app = express();

const routes = require('./src/routes');
const generativeAIService = require('./generativeAI'); 
const openai = require("./openAI");

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/', routes);  

app.post('/generate', async (req, res) => {
  const { message } = req.body;  
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
          { role: "user", content: "Tell me about the Eiffel Tower." },
      ],
      max_tokens: 10,
  });

    console.log("Completion Response:", );
    res.status(200).json({
      success: true,
      message: 'Answer found!',
      data: response.choices[0].text.trim()
    });


} catch (error) {
    console.error("Error:", error.message);
    res.status(200).json({
      success: false,
      message: error.message,
      data: error.message
    });
}
});

//const options = {
  //key: fs.readFileSync(path.join(__dirname, 'ssl/key.pem')),
  //cert: fs.readFileSync(path.join(__dirname, 'ssl/cert.pem')),
//};
// Create an HTTPS server with the Express app
//https.createServer(options, app).listen(process.env.PORT_NUMBER, () => {
  //console.log('HTTPS Express server running at https://localhost:3000');
//});
// Make 'uploads' folder publicly accessible
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads'))); 
app.listen(process.env.PORT_NUMBER, () => {
  console.log('Server running on port http://localhost:3001');
});
