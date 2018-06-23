#!/usr/bin/env node
console.log('Hello, world 1!');

const program = require('commander');

program
  .version('0.0.1')
  .command('command', 'command description')
  .command('needInput <userInput>', 'command2 description')
  .command('testTerm', 'command3 description')
  .command('setAwsCred <aws_access_key_id> <aws_secret_access_key> <region>', 'sets aws credentials')
  .command('createDb <aws_access_key_id> <aws_secret_access_key> <region>', 'sets aws credentials')
  .parse(process.argv);
