#!/usr/bin/env node

const program = require('commander');

program
  .option('-b, --blabbly', 'any flag option')
  .parse(process.argv);

const inputs = program.args;
console.log('inputs', inputs);

if (!inputs.length) {
  console.error('packages required');
  process.exit(1);
}

console.log();
if (program.blabbly) console.log('Option provided!');
inputs.forEach((elem) => { console.log('an input!', elem); });
console.log();
