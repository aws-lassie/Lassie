const program = require('commander');
const { exec } = require('child_process');

program
  .option('-o, --optFlag', 'any flag option')
  .parse(process.argv);

const inputs = program.args;

if (inputs.length !== 3) {
  console.error('Incorrect number of required inputs provided');
  process.exit(1);
}

const errorHandler = (error, stdout, stderr) => {
  if (error || stderr) {
    if (error) console.log('exec error: ', error);
    if (stderr) console.log('shell error: ', stderr);
    process.exit(1);
  }
};

console.log(inputs);
if (program.optFlag) console.log('Option provided!');

// maybe some of these should be chained cuz async?

exec(`aws configure set aws_access_key_id ${inputs[0]}`, errorHandler);
exec(`aws configure set aws_secret_access_key ${inputs[1]}`, errorHandler);
exec(`aws configure set default.region ${inputs[2]}`, errorHandler);
exec(`aws configure set region ${inputs[2]}`, errorHandler);

exec('aws configure list', (error, stdout, stderr) => {
  if (error || stderr) {
    if (error) console.log('exec error: ', error);
    if (stderr) console.log('shell error: ', stderr);
    process.exit(1);
  } else {
    console.log('Result: ', stdout);
  }
});

console.log();
