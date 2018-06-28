const program = require('commander');
const prompt = require('inquirer');
const exec = require('child_process');
const inquirer = require('inquirer');
const chalk = require('chalk');

//const configProfileQ = [

const configUserQ = [
    {
        type : 'input',
        name : 'profileName',
        default: 'default',
        message : chalk.yellow('Enter profile name, if left blank default will be selected')
    },
//];

//const configUserQ = [
    {
        type : 'password',
        name : 'adminUser',
        message : chalk.yellow('Enter adminuser key ID'),
        mask: '*'
    },
//];

//const configUserKeyQ = [
    {
        type : 'password',
        name : 'adminUserKey',
        message : chalk.yellow('Enter adminuser secret access key'),
        mask: '*'
    },
//]

//const configDRQ = [
    {
        type : 'checkbox',
        name : 'region',
        message : chalk.yellow('Select Region'), 
        choices: 
        [
            new inquirer.Separator(chalk.cyanBright.bold('*** US Region ***')),
            {
                name: chalk.blue('US East N. Virgina:') + chalk.green(' us-east-1'),
                value: 'us-east-1'
            }, 
            {
                name: chalk.blue('US East Ohio:') + chalk.green(' us-east-2'),
                value: 'us-east-2'
            }, 
            {
                name: chalk.blue('US West N. California:') + chalk.green(' us-west-1'),
                value: 'us-west-1'
            }, 
            {
                name: chalk.blue('US West Oregon:') + chalk.green(' us-west-2'),
                value: 'us-west-2'
            }, 
            {
                name: chalk.blue('AWS GovCloud(US)') + chalk.green(' us-gov-west1'),
                value: 'aws-us-gov'
            },
            new inquirer.Separator(chalk.cyanBright.bold('*** Canada ***')),
            {
                name: chalk.blue('CA Central') + chalk.green(' ca-central-1'),
                value: 'ca-central-1'
            },
            new inquirer.Separator(chalk.cyanBright.bold('*** South America ***')),
            {
                name: chalk.blue('SA Sao Paulo') + chalk.green(' sa-east-1'),
                value: 'sa-east-1'
            },
            new inquirer.Separator(chalk.cyanBright.bold('*** China ***')),
            {
                name: chalk.blue('China Beijing') + chalk.green(' cn-north-1'),
                value: 'cn-north1'
            },
            new inquirer.Separator(chalk.cyanBright.bold('*** Asia Pacific Region ***')),
            {
                name: chalk.blue('AP Tokyo') + chalk.green(' ap-north-east-1'),
                value: 'ap-north-east-1'
            },
            {
                name: chalk.blue('AP Seoul') + chalk.green(' ap-northeast-2'),
                value: 'ap-northeast-2'
            },
            {
                name: chalk.blue('AP Mumbai') + chalk.green(' us-gov-west1'),
                value: 'aws-us-gov'
            },
            {
                name: chalk.blue('AP Singapore') + chalk.green(' ap-southeast-1'),
                value: 'ap-southeast-1'
            },
            {
                name: chalk.blue('AP Sydney') + chalk.green(' ap-southeast-2'),
                value: 'ap-southeast-2'
            },
            new inquirer.Separator(chalk.cyanBright.bold('*** EU Region ***')),
            {
                name: chalk.blue('EU Frankfurt') + chalk.green(' eu-central-1'),
                value: 'eu-central-1'
            },
            {
                name: chalk.blue('EU Ireland') + chalk.green(' eu-west-1'),
                value: 'eu-west-1'
            },
            {
                name: chalk.blue('EU London') + chalk.green(' eu-west-2'),
                value: 'eu-west-2'
            },
            {
                name: chalk.blue('EU Paris') + chalk.green(' eu-west-3'),
                value: 'eu-west-3'
            }
        ],
        validate: function(answer) {
            if (answer.length !== 1) {
                return 'Please choose 1 selection!'
            }
            return true;
        }
    }
];

// module.exports = ('configUserQ', configUserQ);
// module.exports = ('configuUserKeyQ', configUserKeyQ);
// module.exports = ('configDRQ', configDRQ);

// module.exports = {
//     profile: configProfileQ,
//     id: configUserQ,
//     key: configUserKeyQ,
//     region: configDRQ
// }

module.exports = ('configUserQ', configUserQ);