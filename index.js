const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require("./utils/generateMarkdown")

function questions(){
inquirer
.prompt([
    {
        type: "input", 
        name: "title", 
        message: "What is the title of your project?"
    },
    {
        type: "input", 
        name: "description", 
        message: "Write a description about your project:"
    },
    {
        type: "input", 
        name: "installation", 
        message: "Write a description on how to install your project:"
    },
    {
        type: "input", 
        name: "usage", 
        message: "What is this project used for?"
    },
    {
        type: "input", 
        name: "credits", 
        message: "List your credits:"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "None"
        ]
    },
    {
        type: "input", 
        name: "features", 
        message: "List all features of your project:"
    },
    {
        type: "input", 
        name: "contribute", 
        message: "Write a brief description on how to contribute to your project:"
    },
    {
        type: "input", 
        name: "tests", 
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here:"
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
