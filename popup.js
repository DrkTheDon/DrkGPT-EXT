/////////////////////////////////////////////////////
// DrK ChatGPT Writer (DrkGPT)                     //
// We do a little bit of trolling.                 //
// https://drkbro.ml/                              //
// Coded by: drk, DragonSlayer64                   //
/////////////////////////////////////////////////////
import { OpenAIApi } from "openai";
import axios from "axios";

// consts
const errors= document.querySelector(".errors");
const loading = document.querySelector(".loading");
const output = document.querySelector(".output");
const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";
const form = document.querySelector(".form-data");
const userprompt = document.querySelector(".userPrompt");


var apiKey = "API_KEY";



//api,post
const openai = new OpenAIApi(configuration);

const completionFunction = async userPrompt => {
    loading.style.display = "block";
    errors.textContent = "";
    try {
        const response = await axios.get(`${api}/${userprompt}`)
        loading.style.display = "none";
        
        

    } catch (error) {
        loading.style.display = "none";
        output.style.display = "none";
        errors.textContent = "Something went wrong.";
    }

};
  
// generatedanswer = console.log(completion.data.choices[0].text);
const handleSubmit = async e => {
    e.preventDefault();
    completionFunction(userprompt.value);
    console.log(generatedanswer);

};
form.addEventListener("submit", e => handleSubmit(e));

