#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const createLFQs = require ('./testcli-createLF');
const aws = require('./aws-commands');
const figlet = require('figlet');
const chalk = require('chalk');
const Lassie = chalk.yellow('Lassie');


console.log(chalk.yellow(figlet.textSync('Lassie', {
  font: 'Train',
  horizontalLayout: 'fitted',
  verticalLayout: 'fitted'
})));

program
  .version('0.0.1')
  .command('command', 'command description')
  .command('needInput <userInput>', 'command2 description')
//   .command('testTerm', 'command3 description')
//   .command('setAwsCred <aws_access_key_id> <aws_secret_access_key> <region>', 'sets aws credentials')
//   .command('createDb <aws_access_key_id> <aws_secret_access_key> <region>', 'sets aws credentials')
 .parse(process.argv);


 program
  .command('la')
  .description('Checking AWS listed linked accounts')
  .action(() => {
      return aws.listAccounts();
 });

program
 .command('user')
 .description('Checking AWS listed user accounts')
 .action(() => {
    return aws.listUsers();
 });

program
  .command('createLF')
  .description('Creating a Lambda Function')
  .action(() => {
    prompt(createLFQs).then((answers) => {
      //console.log('my answers in index are :', answers)

      return aws.createLF(answers);
    });
  });
  //.parse(process.argv);

program.parse(process.argv);
