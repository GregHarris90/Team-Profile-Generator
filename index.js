// dependencies
const fs = require("fs");
const inquirer = require("inquirer");

// parent/child classes
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// generate HTML function
const generateHTML = require("./src/generateHTML.js");

const teamProfiles = [];

// manager name, employee ID (number), email address, office number (number)
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
            name: "managerOfficeNumber",
            message: "What is their office number?",
        },
    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber);
        teamProfiles.push(manager);

        menuOptions();
    })

}

// // select engineer option, asked for name, ID (#), email, github username, menu
// const EngineerInfo = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "engineerName",
//             message: "What is the name of this Engineer?",
//         },
//         {
//             type: "number",
//             name: "engineerId",
//             message: "What is their employee ID number?",
//         },
//         {
//             type: "input",
//             name: "engineerEmail",
//             message: "What is their email address?",
//         },
//         {
//             type: "input",
//             name: "engineerGithub",
//             message: "What is their GitHub username?",
//         },
//     ]).then(data)
    
//     menuOptions();

// }

// // select intern option, asked for name, ID (#), email, school, menu
// const InternInfo = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "internName",
//             message: "What is the name of this Engineer?",
//         },
//         {
//             type: "number",
//             name: "internId",
//             message: "What is their employee ID number?",
//         },
//         {
//             type: "input",
//             name: "internEmail",
//             message: "What is their email address?",
//         },
//         {
//             type: "input",
//             name: "internSchool",
//             message: "What school have they attended?",
//         },
//     ]).then(data)

//     menuOptions();

// }

// // presented with menu to add another team member (engineer or intern) or finish building team
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
        if(role === "Engineer") {
            EngineerInfo();
        }else if (role === "Intern") {
            InternInfo();
        }else if (role === "Finished") {
            generateTeam();
        }
});

// // exits application, runs generate HTML with teamProfile array, finishing building team,  HTML is generated
const generateTeam = () => {
    const distHTML = generateHTML(teamProfiles);
    fs.writeFileSync("./dist/index.html", distHTML);
    console.log("Successfully wrote your index.HTML file to dist folder.")
}

// starts application by asking for Manager information
ManagerInfo();