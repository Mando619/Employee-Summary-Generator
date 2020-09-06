const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function employeeInput(response) {
    console.log("what are my answers:", response);

}

   // function validateName(name) {
      //  return name !== "";
   // }

    const questions = [

    {
        type: "input",
        name: "manager",
        message: "What is the name of your Team Manager?"
       // validate: validateName
},
    {
        type: "list",
        message: "What type of Employee would you like to describe?",
        choices: [
            "Engineer",
            "intern",
        ],
        name: "Employees",
    }];
    inquirer.prompt(questions, employeeInput);
    
