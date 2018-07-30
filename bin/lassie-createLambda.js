const program = require('commander');
const prompt = require('inquirer');
const exec = require('child_process');
const inquirer = require('inquirer');
const chalk = require('chalk');


const createLFQs = [
    {
        type : 'checkbox',
        name : 'region',
        message : chalk.greenBright('Select Region'), 
        choices: 
        [
            new inquirer.Separator(chalk.yellowBright('*** US Region ***')),
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
            new inquirer.Separator(chalk.yellowBright('*** Canada ***')),
            {
                name: chalk.blue('CA Central') + chalk.green(' ca-central-1'),
                value: 'ca-central-1'
            },
            new inquirer.Separator(chalk.yellowBright('*** South America ***')),
            {
                name: chalk.blue('SA Sao Paulo') + chalk.green(' sa-east-1'),
                value: 'sa-east-1'
            },
            new inquirer.Separator(chalk.yellowBright('*** China ***')),
            {
                name: chalk.blue('China Beijing') + chalk.green(' cn-north-1'),
                value: 'cn-north1'
            },
            new inquirer.Separator(chalk.yellowBright('*** Asia Pacific Region ***')),
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
            new inquirer.Separator(chalk.yellowBright('*** EU Region ***')),
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
    },
    {
        type : 'input',
        name : 'functionName',
        message : chalk.yellowBright('Enter the Lambda function name')
    },
    {
        type : 'input',
        name : 'zipFileLocation',
        message: chalk.yellowBright('Input full directory for zipped file starting with fileb://') + '\n' + 
                'Example: cd: file/file.js.zip' + '\n' +
                 chalk.greenBright('Input: fileb://file/file.js.zip')
    },
    {
        type : 'input',
        name : 'roleARN',
        message : chalk.yellowBright('Enter the role ARN associated')
    },
    {
        type : 'input',
        name : 'handlerName',
        message : chalk.yellowBright('Enter the function handler name')
    },
    {
        type : 'checkbox',
        name : 'nodeEnvironment',
        message : chalk.yellowBright('Select a Node Env.'),
        choices: 
        [
            new inquirer.Separator(chalk.cyanBright.bold('*** Callbacks ***')),
            {
                name: chalk.greenBright('nodejs6.10'),
                value: 'nodejs6.10'
            },
            new inquirer.Separator(chalk.cyanBright.bold('*** Async ***')),
            {
                name: chalk.greenBright('nodejs8.10'),
                value: 'nodejs8.10'
            },
        ]
    },
    {
        type : 'input',
        name : 'profileName',
        message : chalk.yellowBright('Enter profile name')
    }
]


module.exports = ('createLFQs', createLFQs);