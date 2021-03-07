# Team-Profile-Generator
This is for an application used to build a team of employees, log their information through the terminal, and generate a basic webpage to display it.

*Homework assignment for Week 10 of Coding Bootcamp!*

### Table of Contents 

* [Repository](#Repository) 
* [Technology Used](#Technology-Used) 
* [User Story](#User-Story)
* [Terminal Application](#Terminal-Application)
* [Contact Info](#Contact-Info)
* [Conclusion](#Conclusion)

# Repository

- This repository is for a in-line terminal application to generate a Team-Profile HTML file after answering various questions about each team member and entering the appropriate information.

*LINK TO DEMO VIDEO*

*NEED LINK!*

# Technology-Used

- For this project I used Node.js to build an application to gather information using npm inquirer to prompt the user for questions, then using Object Oriented Program (OOP) build the team of Employees and generate an HTML file to display the all of their Profiles.

- Also I had to use npm jest to write tests for the main constructor function (Employee) and the relevant subclasses (Manager, Engineer, and Intern). After running these test they should all pass telling us our application is in working order.

# User-Story

- To start the application the user must first open the integrated terminal and enter "index.js."

- This begins the set of questions beginning by asking for the Manager Information.

- The user is then presented with a menu asking if they'd like to add additional team members (Engineer, Intern) or finish building a team.

- After building each desired team member and finishing all questions, the application generates an HTML file with all the team profiles and their information onto a webpage.

# Team-Profile-Generator

### Terminal-Application

*IMAGES BELOW*

*Main-WebPage*

*INCOMPLETE EXAMPLE!*
![Team-Profile-Main](https://user-images.githubusercontent.com/73864182/110106386-7a77c700-7d5e-11eb-9c9d-cc45d6f8e5cb.png)

*OPEN INTEGRATED TERMINAL WITH INDEX.JS*
![Run-app1](https://user-images.githubusercontent.com/73864182/110232311-b8e1c300-7ed1-11eb-826b-ac42ddfdaf3f.png)

*RUN APP WITH NODE.JS/ANSWER ALL INQUIRER QUESTIONS*
![Run-app2](https://user-images.githubusercontent.com/73864182/110232312-b97a5980-7ed1-11eb-88d2-0fc6567e1a06.png)

*ONCE FINISHED APPLICATION CREATES TEAM MEMBER CLASSES*
![Run-app3](https://user-images.githubusercontent.com/73864182/110232313-b97a5980-7ed1-11eb-8266-72ea7bc761bd.png)

*TAKES THE CLASS INPUT DATA & GENERATES HTML FILE*
![Run-app4](https://user-images.githubusercontent.com/73864182/110232314-ba12f000-7ed1-11eb-934b-7f4aabc161ff.png)

*GENERATED WEBPAGE WITH TEAM-PROFILE HTML FILE*
![Generated-Team](https://user-images.githubusercontent.com/73864182/110232417-61902280-7ed2-11eb-9116-116463bbe4fc.png)

*TEAM PROFILES (MANAGER/ENGINEER/INTERN)*
![Generated-Team-Info](https://user-images.githubusercontent.com/73864182/110232418-61902280-7ed2-11eb-8349-e30c1d776bb5.png)

*CLICK EMAIL LINK TO OPEN DEFAULT EMAIL*
![Open-Email](https://user-images.githubusercontent.com/73864182/110232420-6228b900-7ed2-11eb-8eff-3e40ca3f30e3.png)

*CLICK GITHUB LINK TO GO TO GITHUB ACCOUNT*
![Open-GitHub](https://user-images.githubusercontent.com/73864182/110232416-60f78c00-7ed2-11eb-8c52-084cd3638da3.png)

*APPLICATION TAKES US TO GITHUB.COM*
![Link-GitHub](https://user-images.githubusercontent.com/73864182/110232419-6228b900-7ed2-11eb-8f85-0a050c45a16b.png)


# Contact-Info:

- Name: Greg Harris
- Email: ghart.productions@gmail.com

# Conclusion

03/05/21
- Overall this homework assignment has been extremely difficult to get completed on time. So far I still can't get my objects with the relevant information to properly work. I'm going to continue working on this project tomorrow in hopes to get my HTML page to generate and then write my tests for each of the classes.

UPDATE: 03/05/21
- I continued working on this assignment last night & today. I was able to get more parts of my code built (generateHTML.js & bringing my object classes into index.js). But my application isn't running and returning a reference error that I can't figure out. I'm going to attend office hours for help on fixing this in hopes of having it working by tomorrow. I might need to request a regrade on this project. 

UPDATE: 03/06/21

- I went over my project with a TA today and finally got my MVP. The application now generates my html page of team-profiles and finally works. I still haven't completed my tests but wanted to turn in my working project. Depending if i can finish my tests I might come back to this assignment for a regrade later on. Thank you!