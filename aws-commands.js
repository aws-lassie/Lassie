const program = require('commander');
const { exec } = require('child_process');
const fileBase = 'fileb://'

const aws = {};

const execCallback = (error, stdout, stderr) => {
    if (error) console.log('exec error: ', error);
    if (stdout) console.log('Result: ', stdout);
    if (stderr) console.log('shell error: ', stderr);
  };

aws.listAccounts = (() => {
    const awsListAccounts = `aws organizations list-accounts`;
    return exec(awsListAccounts, execCallback);
});

aws.listUsers = (() => {
    const awsListUsers = `aws iam get-user`;
    return exec(awsListUsers, execCallback);
})

aws.createLF = ((inputs) => {

    const awsCreateLF = `aws lambda create-function \
    --region ${inputs.region[0]} \
    --function-name ${inputs.functionName} \
    --zip-file ${inputs.zipFileLocation} \
    --role ${inputs.roleARN} \
    --handler ${inputs.handlerName} \
    --runtime ${inputs.nodeEnvironment[0]} \
    --profile ${inputs.profileName}`;

    return exec(awsCreateLF, execCallback);
})



module.exports = ('aws', aws);