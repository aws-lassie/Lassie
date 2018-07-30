const program = require('commander');
const prompt = require('inquirer');
const exec = require('child_process');
const inquirer = require('inquirer');
const chalk = require('chalk');

const deleteL = [
    {
        type : 'input',
        name : 'lambdaName',
        default: 'default',
        message : chalk.greenBright('Enter name of Lambda function to be deleted')
        
    }
]

module.exports = ('deleteLambda', deleteL);
