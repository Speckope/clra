const inquirer = require('inquirer');
const fs = require('fs-extra');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'Pick the environment:',
      name: 'environment',
      choices: ['react-typescript', 'react-javascript'],
    },
  ])
  .then(({ environment }) => {
    const cwd = process.cwd();

    if (environment === 'react-typescript') {
      fs.copy(cwd + '/src/config/ts', cwd + '/src')
        .then(() => {
          console.log('success');
        })
        .catch((err) => console.log(err));
    }

    fs.copy(cwd + '/src/config/public', cwd + '/src/public')
      .then(() => {
        console.log('success');
      })
      .catch((err) => console.log(err));
  });
