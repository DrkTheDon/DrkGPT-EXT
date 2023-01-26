# DrkGPT-EXT
DrkGPT uses the GPT 3.1 API to generate an answer to your question. 
DrkGPT writes it for you. Teachers wont see the copy pasting! Now as a browser extension!
Teachers nowadays use draftback to see if you copy or pasted. DrkGPT writes the essay for you at a designated speed, pausing now and then making your writing more trustworthy.

## Installation/Usage

### API USAGE
In order to use **DrkGPT** you need an **API access key**. Enter [API KEYS](https://beta.openai.com/account/api-keys) and create a secret key


## Preview
#### QUESTION TO DRKGPT
![](https://github.com/DrkTheDon/DrkGPT/blob/main/github/Screenshot%20from%202023-01-24%2023-24-48.png)
#### OUTPUT IN GOOGLE DOCUMENTS
![](https://github.com/DrkTheDon/DrkGPT/blob/main/github/ezgif-2-b9f85f2fc1.gif)

*Written on the "HIGH SPEED" option. Ignore the dot that was my mistake lol.*


## For Developers

#### API Code Section in Javascript
```js
const { Configuration, OpenAIApi } = require("openai");


var API_KEY = "API_KEY"; // Variable for api key
const configuration = new Configuration({
  apiKey: API_KEY, 
});

const openai = new OpenAIApi(configuration);
(async() => {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text)
    })()
```


## Credits
All credits given to the OpenAI team for the API usage. 
The Main developers of this project are **DrkTheDon** (drk#4697) and **DragonSlayer64** (ludvig#2236).
