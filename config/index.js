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
      message: 'Files inside public and src folders will be deleted. Continue?',
      name: 'confirmation',
    },
  ])

  .then(({ environment, confirmation }) => {
    if (!confirmation) return;

    const cwd = process.cwd();

    fs.removeSync(cwd + '/src');

    // TS
    if (environment === 'react-typescript') {
      fs.copySync(__dirname + '/src/ts', cwd + '/src');
    }

    // TS
    if (environment === 'react-javascript') {
      fs.copySync(__dirname + '/src/js', cwd + '/src');
    }

    // Public folder
    fs.removeSync(cwd + '/public');
    fs.copySync(__dirname + '/public', cwd + '/public');
  });
