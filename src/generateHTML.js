// creates Manager Card
function renderManager(manager) {
    if (manager === "") {
        return ("");
    } else {
        return (`
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${manager.name}</h3>
                <h5 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office #: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`);
    }   
};

// creates Engineer Card
function renderEngineer(engineer) {
    if (engineer === "") {
        return ("");
    } else {
        return (`
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${engineer.name}</h3>
                <h5 class="card-title"><i class="fas fa-glasses"></i> Engineer</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`);
    }
};

// creates Intern Card
function renderIntern(intern) {
    if (intern === "") {
        return ("");
    } else {
        return (`
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${intern.name}</h3>
                <h5 class="card-title"><i class="fas fa-graduation-cap"></i> Intern</h5>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>`);
    }
};

// creates HTML file for Team Profiles
function generateHTML(teamMembers) {
    const memberHTML = []
    teamMembers.forEach(teamMember => {
        const memberRole = teamMember.getRole()
        if ( memberRole === "Manager") {
            memberHTML.push(renderManager(teamMember)) 
        } else if ( memberRole === "Engineer") {
            memberHTML.push(renderEngineer(teamMember))
        } else {
            memberHTML.push(renderIntern(teamMember))
        }
        console.log(memberHTML);
    })
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">  
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./stylesheet.css">
        <title>Team-Profile-Page</title>
    </head>
    
    <body>
        <div class="container">
            <div class="jumbotron heading">
                <h1 class="text-center"><i class="fas fa-id-badge"></i> MY TEAM</h1>
                <hr>
                <h2 class="text-center">Profiles can be found below!</h2>
                <br>
            </div>
    
            <div class="row row-cols-3 team-profiles">
                ${memberHTML.join("")}
            </div>
            
    </body>
    </html>`
}



// exports HTML file
module.exports = generateHTML;