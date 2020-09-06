const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/intern");
const render = require("../lib/render");
const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");

//const writeFileAsync= util.promisify(fs.writeFile);

// for html render
const employeeRoster = [];

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee id number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee email address? "
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role in the team?",
        choices: [{
            name: "Manager"
        },
        {
            name: "Engineer"
        },
        {
            name: "Intern"
        }]
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
        when: function(response){
            return response.role === "Engineer";
        }
    },
    {
        type: "input",
        name:"github",
        message: "What is the Engineers Github username?",
        when: function(response){
            return response.role === "Engineer";

        }
    },
    {
        type:"input",
        name: "school",
        message: "What is the name of the interns school?",
        when: function(response){
            return response.role === "intern";
        }
    }
];


// create function from prompts, and responses

//create a new employee function 