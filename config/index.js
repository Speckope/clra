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
  .then(({ environment, public }) => {
    const cwd = process.cwd();

    fs.removeSync(cwd + '/src');
    console.log('s1');

    if (environment === 'react-typescript') {
      fs.copySync(cwd + '/config/src', cwd + '/src');
    }

    fs.removeSync(cwd + '/public');
    console.log('s3');

    fs.copySync(cwd + '/config/public', cwd + '/public');
  });

fs;
