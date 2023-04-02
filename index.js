const inquirer = require("inquirer");
//importing the library to use
const fs = require('fs');




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
/*
 title of my project and sections 
 entitled Description, Table of Contents, 
 Installation, Usage, License, Contributing, 
 Tests, and Questions

*/

const questions = [{
    type: "input",
    name: "project_name",
    message: "What is your project name?"
},{
    type: "input",
    name: "description",
    message: "What is your project description?"
},{
    type: "input",
    name: "installation",
    message: "How did you install?"
},{
    type: "input",
    name: "usage",
    message: "What is the purpose of the project?"
},{
    type: "list",
    name: "license",
    choices: ["cc","osl-3.0","unlicenses"],
    message: "Choose your license?"
},{
    type: "input",
    name: "contribution",
    message: "Who contributed to the project?"
},{
    type: "input",
    name: "test",
    message: "How do i run tests?"
},{
    type: "input",
    name: "email",
    message: "What is your email?"
},{
    type: "input",
    name: "github",
    message: "What is your github?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("these are my answers", answers)



    let output = `# ${answers.project_name}

## Description
${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#Contribution)
- [Test](#test)
- [Questions](#questions)


## Installation
    
${answers.installation}


## Usage
    
${answers.usage}
      
## Credits

${answers.contribution}

    ## Test

    ${answers.test}
    
    ## License
    
    ${answers.license} 

    ## Questions
    [${answers.github}](http://www.github.com/${answers.github})

    [${answers.email}](${answers.email})

    
    `;



    // Use user feedback for... whatever!!
    writeToFile("README.md", output)


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




}

// Function call to initialize app
init();
