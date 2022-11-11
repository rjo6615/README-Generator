// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge;
function renderLicenseBadge(license) {
    if(license == "None"){
       licenseBadge = "";
    } else {
        licenseBadge = `![badge](https://img.shields.io/badge/license-${license}-lightblue)`;
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    renderLicenseBadge(answers.license);
    return`
    
# ${answers.title}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${licenseBadge}

## Features

${answers.features}

## How to Contribute

${answers.contribute}

## Tests

${answers.tests}
`;
}

module.exports = generateMarkdown;


