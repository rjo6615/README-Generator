// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require("./utils/generateReadme")

// TODO: Create an array of questions for user input
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
.then((answer) => {
const createReadme = generateReadme(answers);
const fileName = "./generatedREADME.md";
fs.writeToFile(fileName, createReadme, (error) => 
error ? console.error(error) : console.log("Saved!"));
})
}

// TODO: Create a function to write README file
// const createReadme = generateReadme(answers);
// const fileName = "./generatedREADME.md";
// function writeToFile(fileName, createReadme) {

// }

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
