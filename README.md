# Routing Project in Express
This is a simple Node.js application with Express routing. It is a RESTful API that serves a series of simple HTML pages. It allows users to post to an online messaging board, where they can give each other UI/UX building tips. 

It was built with [starter code](#about-the-project). I added additional GET and POST routes for a [404 wildcard page](#404-wildcard-page) and for [recording diagnostic information](#diagnostics---error-message) when the HTML form is not filled out correctly.

I aim to deploy this application to Amazon Web Services soon with EC2.

## Contents

1. [About the Project](#about-the-project)
2. [Using the Routing Project](#using-the-routing-project)
3. [Technology Stack](#technology-stack)
4. [Version History](#version-history)
5. [Testing](#testing-in-postman)
6. [Contribution](#contribution)
7. [Contact Info](#contact-info)

## About the Project
This was a mini-project assignment for the [University of Birmingham Coding Bootcamp](https://gist.github.com/djbowen95/2846640d520a16165b9b23db2d9e0926). Every week on the bootcamp, we were assigned to build or refactor two projects: one simple mini-project that was built in class, and a more complex homework project to work on independently over the following week. It was an intensive programme where we learned one new skill or technology every week - the projects were designed to test our understanding of our new skills, and force us to find a real world application for a newly learned skills straight away. 

This project was assigned on the 11th week of the course, where we looked at Express routing and RESTful APIs. To see the given project brief, click [here](./docs/brief.md).

I built a version of this project in class while I was enrolled on the course, but decided to repeat this project as I wanted something simple to deploy to AWS' EC2. I am currently working on a polished version of the application for this purpose.
## Using the Routing Project
### Posting on the Message Board
### 404 Wildcard Page
### Diagnostics - Error Message
### Diagnostics - User / Admin Page
(Might add this as a feature)

## Technology Stack
The main reason for posting and maintaining this repository is for me to demonstrate my fundamental understanding in the back-end technology stack used for creating a Node/Express server. The following technologies are used in this project:  

**Node.js**: JavaScript run-time environment used to develop a back-end application.  

**Express**: Library used for routing with Node.js and JavaScript. Used here to create a RESTful API that responds to both GET and POST requests; used both for routing between HTML pages and writing data to a simple JSON database.

**JSON**: This application uses a simple, local JSON file as a database. It stores the error messages and message board posts to this file, rather than a more [complex database](https://github.com/djbowen95/e-commerce-back-end).

**Amazon Web Services' EC2**: Currently working on this.

**Fetch API**: I need to check this/remind myself how this is used in this application! I'm sure it is...

**Middleware**: There is some custom middleware in [clog.js](./middleware/clog.js) that logs every query made to the API in the terminal. I did not build this myself/it came with the starter code, but as someone who is constantly using `console.log()` to check my code every step of the way, I found it really useful!

## Version History
### 0.0.0 Source Code
I included this as a release so you can compare what I started with to what I built, and see which features I added to the project easily.

## Testing
### Manual Testing in Postman
I tested this application with Postman and built a suite of tests to make sure all the API routes I built personally were working effectively before deployment.

I will edit in a demonstration here.

### Unit Testing
I did not build unit tests for this project - as it is only a small portfolio project that I wanted to build quickly, to demonstrate particular skills.  

I have built other projects with unit testing and test-driven development principles, built at a similar time on the course, which you can view [here](https://github.com/djbowen95/Team-Profile-Builder) and [here](https://github.com/djbowen95/GuessingGame). I intend to go back to these projects, and build further unit tests for my projects, at a later date.
## Contribution
I am not looking to collaborate on this particular project - I'd love to work together on other projects with junior developers though! Please use my contact details below if you'd like to reach out and hear about what I'm currently working on, or pitch an idea to me!

## Contact Info
Email: djbowen95@gmail.com
LinkedIn: https://www.linkedin.com/in/daniel-bowen-6266ba191/
