// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge;
function renderLicenseBadge(license) {
    if(license == "None"){
       licenseBadge = "";
    } else {
        licenseBadge = `![badge](https://img.shields.io/badge/license-${license}-lightblue)`;
    }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license == "None"){
        licenseLink = "";
    } else if(license == "Apache"){
        licenseLink = "[Link to Apache license](https://www.apache.org/licenses/LICENSE-2.0)"
    } else if(license == "Academic"){
        licenseLink = "[Link to Academic license](https://opensource.org/licenses/AFL-3.0)"
    } else if(license == "GNU"){
    licenseLink = "[Link to GNU license](https://www.gnu.org/licenses/gpl-3.0.en.html)"
    } else if(license == "ISC"){
    licenseLink = "[Link to ISC license](https://opensource.org/licenses/ISC)"
    } else if(license == "MIT"){
    licenseLink = "[Link to MIT license](https://www.mit.edu/~amini/LICENSE.md)"
    } else if(license == "Mozilla"){
    licenseLink = "[Link to Mozilla license](https://www.mozilla.org/en-US/MPL/)"
    } else if(license == "Open"){
    licenseLink = "[Link to Open license](https://www.microsoft.com/en-us/licensing/licensing-programs/open-license?activetab=open-license-tab%3aprimaryr2)"
    }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == "None"){
        licenseSection = "";
    } else {
        licenseSection = `## License`;        
    }
}

function generateMarkdown(answers) {
    renderLicenseSection(answers.license);
    renderLicenseBadge(answers.license);
    renderLicenseLink(answers.license);
    return`
    
# ${answers.title}

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

${licenseSection}

${licenseBadge}
${licenseLink}

## Features

${answers.features}

## How to Contribute

${answers.contribute}

## Tests

${answers.tests}
`;
}

module.exports = generateMarkdown;


