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

const execCallback = (error, stdout, stderr) => {
  if (error) console.log('exec error: ', error);
  if (stdout) console.log('Result: ', stdout);
  if (stderr) console.log('shell error: ', stderr);
};

console.log('my input is : ', inputs);
console.log('my input[0] is : ', inputs[0]);
console.log('my input[1] is : ', inputs[1]);
console.log('my input[2] is : ', inputs[2]);

const awsComd = `aws dynamodb create-table \
    --table-name LassieLogs8 \
    --attribute-definitions \
        AttributeName=Id,AttributeType=N \
    --key-schema \
        AttributeName=Id,KeyType=HASH \
    --provisioned-throughput \
        ReadCapacityUnits=5,WriteCapacityUnits=5`;

if (program.optFlag) console.log('Option provided!');

exec(awsComd, execCallback);

console.log();
