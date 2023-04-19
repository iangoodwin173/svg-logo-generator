//pulls all required files and processes for application
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./shapes.js');

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
      message: 'Enter up to 3 characters to include in your logo',
      name: 'characters',
    },
    {
      type: 'input',
      message: 'Enter a color keyword or hexadecimal value for your logo text',
      name: 'textColor',
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hexadecimal value for your logo background',
        name: 'logoColor',
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });