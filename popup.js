/////////////////////////////////////////////////////
// DrK ChatGPT Writer (DrkGPT)                     //
// We do a little bit of trolling.                 //
// https://drkbro.ml/                              //
// Coded by: drk, DragonSlayer64                   //
/////////////////////////////////////////////////////
import { OpenAIApi } from "openai";

const prompt = require("prompt-sync")();

// consts
const errors= document.querySelector(".errors");
const loading = document.querySelector(".loading");
const output = document.querySelector(".output");
const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";

const form = document.querySelector(".form-data");
const userprompt = document.querySelector(".userPrompt");

const configuration = new Configuration({
  apiKey: "",
});


//api,post
const openai = new OpenAIApi(configuration);

const completionFunction = async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: userprompt,
  });

  generatedanswer = console.log(completion.data.choices[0].text);
};
const handleSubmit = async e => {
    e.preventDefault();
    completionFunction();
    console.log(generatedanswer);

};
form.addEventListener("submit", e => handleSubmit(e));

