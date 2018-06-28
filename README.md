# Lassie
   _                                _
  | |     __ _     ___     ___     (_)     ___
  | |__  / _` |   (_-<    (_-<     | |    / -_)
  |____| \__,_|   /__/_   /__/_   _|_|_   \___|
_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'

AWS Lambda function monitoring under Lassie's CLI.
## Getting Started

These instructions will get you Lassie's CLI running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Configuration with aws cli is provided. See CLI Commands below for more documentation.

### Prerequisites

Install the aws cli
```
https://docs.aws.amazon.com/cli/latest/userguide/installing.html
```

Fork and download this repository.

```
git init https://github.com/aws-lassie/Lassie.git
```

### Installing

A step by step series of starting the Lassie CLI to monitor your AWS Lambda functions globally on your terminal.

Go to the directory of the initialized git

```
npm link
```

Start Lassie's CLI by typing

```
lassie
```

End with an example of getting some data out of the system or using it for a little demo

## Lassie CLI Commands 

Configure your AWS Credentials with Lassie. If there is an error in validating it will be displayed.
Otherwise, once the configuration is succesful the result will be displayed.

```
lassie configure
```

If there is an error in creating the credentials the credentials will still be saved in the path.
Credentials should be cleared if they do not work by manually going into the path below. 
```
C:\Users\USERNAME \.aws\ 
```

To check linked accounts after configuration.
```
lassie la
```

To check listed users after configuration.
```
lassie user
```

To create a Lambda function you will be walked through a prompt. 
If there is an error in creating it will be displayed.
```
lassie createLF
```

To check all current Lambda functions
```
lassie list
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

<!-- * **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth) -->

See also the list of [contributors](https://github.com/aws-lassie/Lassie/contributors) who participated in this project.

## License

This project is licensed under the Apache License 

```
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

