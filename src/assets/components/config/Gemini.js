// const apikey="AIzaSyALKeScMD5Hlz19DRQRFGzKm8eaEWG_ovc"

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyALKeScMD5Hlz19DRQRFGzKm8eaEWG_ovc";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runchat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response=result.response.text()
    // console.log(result.response.text());
    return response
  }
  
   export default runchat;