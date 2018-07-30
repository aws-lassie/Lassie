
const program = require('commander');
const { exec } = require('child_process');

program
  .option('-o, --optFlag', 'any flag option')
  .parse(process.argv);

// const inputs = program.args;

// if (!inputs.length) {
//   console.error('packages required');
//   process.exit(1);
// }

const execCallback = (error, stdout, stderr) => {
  if (error) console.log('exec error: ', error);
  if (stdout) console.log('Result: ', stdout);
  if (stderr) console.log('shell error: ', stderr);
};

console.log();
if (program.optFlag) console.log('Option provided!');
// inputs.forEach((elem) => { console.log('an input!', elem); });
exec('aws lambda list-functions', execCallback);

console.log();
