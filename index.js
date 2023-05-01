//pulls all required files and processes for application
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./shapes.js');

function writeToFile(fileName, data) {
    let svgString = "";
    // Sets width and height of logo container to 300px by 200px
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${data.shape}`;
  
    // if statement determines user input for shape choice and executes code accordingly
    let chosenShape;
    if (data.shape === "Triangle") {
      chosenShape = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.logoColor}"/>`;
    } else if (data.shape === "Square") {
      chosenShape = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${data.logoColor}"/>`;
    } else {
      chosenShape = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${data.logoColor}"/>`;
    }
  
    
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.characters}</text>`;
    svgString += "</g>";
    svgString += "</svg>";
  
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }

//prompts user for inputs pertaining to logo appearance
inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want your logo to be?',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      message: 'Enter up to 3 characters to include in your logo:',
      name: 'characters',
    },
    {
      type: 'input',
      message: 'Enter a color keyword or hexadecimal value for your logo text:',
      name: 'textColor',
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hexadecimal value for your logo background:',
        name: 'logoColor',
    },
  ])
  .then((data) => {
    
    if (data.characters.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
      promptUser();
    } else {
      writeToFile("logo.svg", data);
    }
  });