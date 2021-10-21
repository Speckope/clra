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
      fs.copySync(cwd + '/config/ts', cwd + '/src');
    }

    fs.removeSync(cwd + '/src/public');
    console.log('s3');

    fs.copySync(cwd + '/config/public', cwd + '/src/public');
  });

fs;