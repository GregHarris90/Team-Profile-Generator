// dependencies
const fs = require("fs");
const inquirer = require("inquirer");

// parent/child classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// generate HTML function
const generateHTML = require("./src/generateHTML.js");

// empty array for team objects
const teamProfiles = [];

// ask for manager name, employee ID (number), email address, office number (number), then run menuOptions
const ManagerInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team Manager's name?",
        },
        {
            type: "number",
            name: "managerId",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is their email address?",
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is their office number?",
        },
    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        teamProfiles.push(manager);

        menuOptions();
    })
}

// select engineer option, ask for name, ID (#), email, github username, then run menuOptions
const EngineerInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of this Engineer?",
        },
        {
            type: "number",
            name: "engineerId",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is their email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is their GitHub username?",
        },
    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        teamProfiles.push(engineer);

        menuOptions();
    })
}

// select intern option, ask for name, ID (#), email, school, then run menuOptions
const InternInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of this Engineer?",
        },
        {
            type: "number",
            name: "internId",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is their email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school have they attended?",
        },
    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        teamProfiles.push(intern);

        menuOptions();
    })
}

// run menuOptions and ask to add another team member (engineer/intern) or finish building team
const menuOptions = () =>
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select your next employee or select 'Finished' to complete building team:",
            choices: ["Engineer", "Intern", "Finished"],
        },
    ]).then(data => {
        const role = data.menu;
        if (role === "Engineer") {
            EngineerInfo();
        }else if (role === "Intern") {
            InternInfo();
        }else if (role === "Finished") {
            generateTeam();
        }
});

// exits application, runs generateHTML with teamProfiles array, finish building team, then HTML is generated
const generateTeam = () => {
    console.log(teamProfiles);
    const distHTML = generateHTML(teamProfiles);
    fs.writeFileSync("./dist/index.html", distHTML);
    console.log("Successfully wrote your index.HTML file to dist folder.")
}

// starts application by asking for manager information
ManagerInfo();