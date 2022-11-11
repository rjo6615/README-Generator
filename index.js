const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require("./utils/generateMarkdown")

function questions(){
inquirer
.prompt([
    {
        type: "input", 
        name: "name", 
        message: "What is your name?"
    },
    {
        type: "input", 
        name: "bio", 
        message: "Write a bio"
    },
    {
        type: "input", 
        name: "location", 
        message: "What is your location?"
    },
    {
        type: "input", 
        name: "linkedIn", 
        message: "What is your LinkedIn?"
    },
    {
        type: "input", 
        name: "gitHub", 
        message: "What is your GitHub?"
    }
])
.then((answers) => {
const createReadme = generateReadme(answers);
const fileName = "./generatedREADME.md";
fs.appendFile(fileName, createReadme, (error) => 
error ? console.error(error) : console.log("Saved!"));
})
}

function init() {
    questions();
}

init();
