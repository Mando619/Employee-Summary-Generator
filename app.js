const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const render = require("./lib/htmlRender");
const inquirer = require("inquirer");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// for html render
const employeeRoster = [];

// to start the first prompt
generateManager();

function generateManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your Managers name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your Managers id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your Managers email?"

        },
        {
            type: "input",
            name: "officeNumber",
            message: "what is your Managers office number?"
        },
    ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeRoster.push(manager)
        console.log(employeeRoster)
        generateNewRole()

    })
}

function generateNewRole() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What employee role would you like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "None",
            ]
        }
    ]).then(function (answers) {
        if (answers.role === "Manager") {
            generateManager()
        }
        if (answers.role === "Engineer") {
            generateEngineer()
        }
        else if (answers.role === "Intern") {
            generateIntern()
        }
        else if (answers.role === "None") {
            console.log("You have successfully finished creating your team!");
            generateHtml()
        }
    })
}
    function generateEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your Engineers name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your Engineers id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your Engineers email?"

            },
            {
                type: "input",
                name: "github",
                message: "What is your Engineers Github username?"
            },

        ]).then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employeeRoster.push(engineer)
            console.log(employeeRoster)
            generateNewRole()
        })
    }

        function generateIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your Interns name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your Interns id?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your Interns email?"

                },
                {
                    type: "message",
                    name: "school",
                    message: "What is the name of your Interns school?"
                },

            ]).then(function (answers) {

                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                employeeRoster.push(intern)
                console.log(employeeRoster)
                generateNewRole()
            })
        }
    
        // create function for rendering html and writing file. use async function

            async function generateHtml() {
                try{
                const html = render(employeeRoster);
                await writeFileAsync(outputPath, html)
                   console.log ("You have successfully written your team page!")
                } catch(err) {
                    console.log(err)
                }
            }