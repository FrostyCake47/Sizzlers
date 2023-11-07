//const prompt = require("prompt-sync")();


/*import OpenAI from "openai";
const openai = new OpenAI();*/

/*const axios = require('axios');
API_KEY = "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";
const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';*/

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const output = document.getElementById("output");
const quest = document.getElementById("quest");
const anstxt = document.getElementById("anstxt");

console.log(button1.textContent)

var userChoice = -1;
var ans = -1;

/*const inputData = {
    prompt: 'Translate the following English text to French: "{text}"',
    max_tokens: 50,
};*/

/*function getQuestion(){
    axios.post(endpoint, inputData, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        const generatedText = response.data.choices[0].text;
        console.log('Generated Text:', generatedText);
    })
    .catch(error => console.error('Error:', error));
}*/


function checkAns(userChoice){
    console.log("ans = " + ans);
    console.log("user choice = " + userChoice);
    if (userChoice == ans){
        anstxt.textContent = "weow correct ans";
    }
    else {
        anstxt.textContent = "bed boi";
    }
}


button1.addEventListener("click", function() {
    output.textContent = "Value: Button 1 Clicked";
    checkAns(1);
});

button2.addEventListener("click", function() {
    output.textContent = "Value: Button 2 Clicked";
    checkAns(2);
});

button3.addEventListener("click", function() {
    output.textContent = "Value: Button 3 Clicked";
    checkAns(3);
});

button4.addEventListener("click", function() {
    output.textContent = "weow";
    checkAns(4);

});


function main() {
    const questData = ["elo whats my name", "idk", "gae", "aman", "aaa", 4];
    ans = questData[5]; // 4
    quest.textContent = questData[0];
    button1.textContent = questData[1];
    button2.textContent = questData[2];
    button3.textContent = questData[3];
    button4.textContent = questData[4];

    getQuestion()
    checkAns(userChoice, ans);
}

main();