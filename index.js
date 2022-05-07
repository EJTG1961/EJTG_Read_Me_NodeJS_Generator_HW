// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// function questions =
// inquirer
//   .prompt([
const questions = async () => {
  const data = inquirer
    .prompt([
      {
        type: "input",
        name: "userName",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "title",
        message: "What is your project name?",
      },
      {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        name: "contributors",
        message: "Who are the contributors to this project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please briefly describe this project.",
      },
      {
        type: "input",
        name: "usage",
        message: "How will this project be used?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
      {
        type: "input",
        name: "linkedin",
        message: "Please enter your LinkedIn URL.",
      },
      {
        type: "input",
        name: "installation",
        message: "What is the installation process?",
      },
      {
        type: "input",
        name: "test",
        message: "What is the test process for this project?",
      },
      {
        type: "input",
        name: "table of content",
        message: "Please provide a table on content",
      },
    ])
    .then((response) => {
      console.log("Making ReadMe");
      fs.writeFile("ReadMe.md", generateMarkdown(response), (err) => {
        console.log("READme Created!");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// TODO: Create a function to write README file
//  function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();

//   path.get(`https://api.github.com/users/${userName}`).then((questions) => {
//     console.log(questions.data);
//  })
