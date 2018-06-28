const program = require('commander');
const { exec } = require('child_process');
const chalk = require('chalk');
const chalkRainbow = require('chalk-rainbow');


const aws = {};

const execCallback = (error, stdout, stderr) => {
    if (error) {
        console.log(chalk.red('exec error: '), stderr)
        process.exit(1);
        //return;
    }
    if (stdout) {
        console.log(chalkRainbow('Result: '), stdout)
        process.exit(0);
    }
    if (stderr) {
        console.log(chalk.red('shell error: '), stderr)
        process.exit(1);
    }
};

aws.configProfile = ((input) => {
    const awsConfigureProfile = `aws configure --profile ${input.profileName}`;

    return exec(awsConfigureProfile, execCallback)
})

aws.configUser = ((inputs) => {

    const awsConfigureProfile = `aws configure --profile ${inputs.profileName}`;
    const awsConfigureUser = `aws configure set aws_access_key_id ${inputs.adminUser}`;
    const awsConfigureUserKey = `aws configure set aws_secret_access_key ${inputs.adminUserKey}`;
    const awsConfigureDefaultRegion = `aws configure set ${inputs.profileName}.region ${inputs.region[0]}`;

    const checkInputs = Object.values(inputs)

    let inputCheck = function checkEmpty (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '') return false;
        }
        return true;
    }

    if (inputCheck(checkInputs) === true) {
        exec(awsConfigureProfile)
        exec(awsConfigureUser)
        exec(awsConfigureUserKey)
        exec(awsConfigureDefaultRegion)

        //let verifyConfig = () => {aws.listUsers()};
        return aws.listUsers();
        //return;
    }
    else {
    console.log(chalk.red('Required inputs needed for creating a profile!'));
    return;
    }
})

aws.configDefaultRegion = ((input) => {
    const awsConfigureDefaultRegion = `aws configure set ${input.profileName}.region ${input.region[0]}`;

    return exec(configureDefaultRegion, execCallback)
})

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

aws.listFunctions = (() => {

    const awsListFuncs = `aws lambda list-functions`;

    exec(awsListFuncs, execCallback);
})

aws.deleteFunction = (() => {
    
})

module.exports = ('aws', aws);