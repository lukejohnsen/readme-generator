// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!')
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project',
    },
    
    {
        type: 'input',
        name: 'installation',
        message: "Describe the project's installation process"
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license(s) for this project.',
        choices: ['MIT', 'Apache', 'BSD']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Who was involved in the creation of this project?'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please enter information on how to test your project here.'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!')
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your full email address (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email username!')
                return false
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownData = generateMarkdown(data);

    fs.writeFile(fileName, markdownData, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then((answers) => writeToFile('./dist/newREADME.md', answers))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
