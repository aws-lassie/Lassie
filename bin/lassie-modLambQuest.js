const inquirer = require('inquirer');
const chalk = require('chalk');

const createLFQs = [
  {
    type: 'input',
    name: 'lambdaFuncFilename',
    message: chalk.yellowBright('Input full filename for lambda function file.') + '\n' +
      'Example: /Users/Adam/lambdas/lambdaOne.js\n' +
      chalk.greenBright('Input:')
  },
  {
    type: 'input',
    name: 'newLambdaFuncFilename',
    message: chalk.yellowBright('Input full filename for new modified lambda function file.') + '\n' +
      'Example: /Users/Adam/lambdas/newlambdaOne.js\n' +
      chalk.greenBright('Input:')
  }
];

module.exports = ('createLFQs', createLFQs);
