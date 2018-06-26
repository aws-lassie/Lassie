#!/usr/bin/env node
console.log('Hello, world 1!');

const program = require('commander');
const { prompt } = require('inquirer');
const createLFQs = require ('./testcli-createLF');

program
  .version('0.0.1')
  .command('command', 'command description')
  .command('needInput <userInput>', 'command2 description')
  .command('testTerm', 'command3 description')
  .command('setAwsCred <aws_access_key_id> <aws_secret_access_key> <region>', 'sets aws credentials')
  .command('createDb <aws_access_key_id> <aws_secret_access_key> <region>', 'sets aws credentials')
  .parse(process.argv);

program
  .version('0.0.1')
  .command('createLF')
  .description('Creating a Lambda Function')
  .action(() => {
    prompt(createLFQs).then((answers) => {
      console.log('my answers in index are :', answers)
    });
  });
  //.parse(process.argv);

program.parse(process.argv);
