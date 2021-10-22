#!/usr/bin/env node
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
    {
      type: 'confirm',
      message: 'Files inside public and src folders will be delted. Continue?',
      name: 'confirmation',
    },
  ])

  .then(({ environment, confirmation }) => {
    if (!confirmation) return;

    const cwd = process.cwd();

    fs.removeSync(cwd + '/src');

    // TS
    if (environment === 'react-typescript') {
      fs.copySync(cwd + '/config/src/ts', cwd + '/src');
    }

    // TS
    if (environment === 'react-javascript') {
      fs.copySync(cwd + '/config/src/js', cwd + '/src');
    }

    // Public folder
    fs.removeSync(cwd + '/public');

    fs.copySync(cwd + '/config/public', cwd + '/public');
  });
