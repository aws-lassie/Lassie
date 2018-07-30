#!/usr/bin/env node
'use strict';
const program = require('commander');
const { prompt } = require('inquirer');
const aws = require('./aws-commands');
const figlet = require('figlet');
const chalk = require('chalk');

// questions formatted with inquirer
// Config User Question
const configUserQ = require('./lassie-configure');

// Lambda Function Question
const createLFQs = require('./lassie-createLambda');

// Lamda Delete Function
const deleteLambda = require('./lassie-deleteLambda');

// Modify Lambda Function: Questions and Code?
const modLambQuestions = require('./lassie-modLambQuest');
const modLambFunc = require('./lassie-modLambFunc');

console.log(chalk.cyanBright(figlet.textSync('Lassie', {
  font: 'Train',
  horizontalLayout: 'fitted',
  verticalLayout: 'fitted'
})));

program
  .version('0.0.1')
  .command('command', 'command description');

// CLI Command to list linked accounts with AWS
program
  .command('configure')
  .description('Configures account access to AWS')
  .action(() => {
    prompt(configUserQ).then((answers) => {
      console.log('my inputs are : ', answers);

      aws.configUser(answers);
      // aws.configureUserKey(answers);
      // aws.configureDefaultRegion(answers);

      return;
    });
  });

// CLI Command to list linked accounts with AWS
program
  .command('la')
  .description('Checking AWS listed linked accounts')
  .action(() => {
    return aws.listAccounts();
  });

// CLI Command to list user accounts with AWS
program
  .command('user')
  .description('Checking AWS listed user accounts')
  .action(() => {
    return aws.listUsers();
  });

// CLI Command to create an AWS Lamdbda Function
program
  .command('createLambda')
  .description('Creating a Lambda function')
  .action(() => {
    prompt(createLFQs).then((answers) => {
      return aws.createLF(answers);
    });
  });

// CLI command to list all current Lambda functions
program
  .command('listLambdas')
  .description('Listing all current Lambda functions')
  .action(() => {
    return aws.listLambdas();
  });

program
  .command('deleteLambda')
  .description('Delete a Lambda function from the current list of Lambda functions')
  .action(() => {
    prompt(deleteLambda).then((answer) => {
      return aws.deleteLambda(answer);
    });
  });

program
  .command('addWrapper')
  .description('Add monitoring code to existing lambda function')
  .action(() => {
    prompt(modLambQuestions).then((answer) => {
      modLambFunc(answer);
    });
  });

program.parse(process.argv);
