// dependencies
const fs = require("fs");
const inquirer = require("inquirer");

// parent/child classes
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//
const generateHTML = require("./src/generateHTML.js");

const teamProfiles = [];

// manager name, employee ID (number), email address, office number (number)
const ManagerInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team Manager's name?",
        },
        {
            type: "number",
            name: "id",
            message: "What is their employee ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?",
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is their office number?",
        },
    ]).then(data => {
        const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
        teamProfiles.push(manager);

        // menuOptions();
    })

}

// // select engineer option, asked for name, ID (#), email, github username, menu
// const EngineerInfo = () => {
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the name of this Engineer?",
//         },
//         {
//             type: "number",
//             name: "id",
//             message: "What is their employee ID number?",
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is their email address?",
//         },
//         {
//             type: "input",
//             name: "github",
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
//             name: "name",
//             message: "What is the name of this Engineer?",
//         },
//         {
//             type: "number",
//             name: "id",
//             message: "What is their employee ID number?",
//         },
//         {
//             type: "input",
//             name: "school",
//             message: "What school have they attended?",
//         },
//     ]).then(data)

//     menuOptions();

// }

// // presented with menu to add another team member (engineer or intern) or finish building team
// const menuOptions = () =>
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "menu",
//             message: "Please select your next employee or select 'Finished' to complete building team:",
//             choices: ["Engineer", "Intern", "Finished"],
//         },
//     ]).then(data => {
//         const role = data.menu;
//         if(role === "Engineer") {
//             EngineerInfo();
//         }else if (role === "Intern") {
//             InternInfo();
//         }else if (role === "Finished") {
//             generateTeam();
//         }
// });

// // finish building team, exits application, HTML is generated
const generateTeam = () => {

}




// starts application by asking for Manager information
ManagerInfo();