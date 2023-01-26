/////////////////////////////////////////////////////
// DrK ChatGPT Writer (DrkGPT)                     //
// We do a little bit of trolling.                 //
// https://drkbro.ml/                              //
// Coded by: drk, DragonSlayer64                   //
/////////////////////////////////////////////////////

const { Configuration, OpenAIApi } = require("openai");

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
var api = "https://api.openai.com/v1/completion";


//api,post
const openai = new OpenAIApi(configuration);

const completionFunction = async userPrompt => {
    loading.style.display = "block";
    errors.textContent = "error";
    try {
        const response = fetch(api, {
            method: "POST",
            data: JSON.stringify({
              model: "text-davinci-003",
              prompt: userprompt.value,
              temprature: 0,
              max_tokens: 2048,
            }),
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-type": "application/json; charset=UTF-8"
            }
                   
          })
            console.log(response.json)
    } catch (error) {
        loading.style.display = "none";
        output.style.display = "none";
        errors.textContent = "Something went wrong.";
    }
    output.textContent = response.choices.text
};
  
// generatedanswer = console.log(completion.data.choices[0].text);
const handleSubmit = async e => {
    e.preventDefault();
    completionFunction();
    console.log(response.text);

};
form.addEventListener("postprompt", e => handleSubmit(e));
