# WDIOAppiumProject


## Description
The project aims to automate the testing of a mobile application using WebdriverIO and Appium. 
The mobile application is a to-do list app that enables users to manage their daily tasks, set reminders, and categorize tasks.

### Prerequisitos
node.js version 16 or higher is required
* android studio ,SDK, virtual machine emulator
* intellij IDEA Conmunity -https://www.jetbrains.com/es-es/idea/download/#section%3Dwindows
* JDK 11
* install node.js here [node.js](https://nodejs.org/en/)
* Install Appium (https://appium.io/docs/en/2.0/)
* Install WebdriverIO (https://webdriver.io/docs/gettingstarted/)
* Install (https://mvnrepository.com/artifact/junit/junit/3.8.1) 
* Install (JAVA https://mvnrepository.com/artifact/io.appium/java-client/6.0.0)
* Install Cucumber (https://mvnrepository.com/artifact/io.cucumber/cucumber-java/1.2.5)
                    (https://mvnrepository.com/artifact/io.cucumber/cucumber-picocontainer/1.2.5)
                    (https://mvnrepository.com/artifact/info.cukes/cucumber-junit/1.2.5)


## Structure
```
└───WDIOAPPIUMPROJECT/
   ├   ├───api/
   ├     └───To-Do-List-SchedulePlanner.apk/
   │   └───features/
   │      └───pageobjects/   
   │      └───steps-definitions/
   │         └───steps/
   │      └───login.feature/ 
   │       └───Pending-task.feature/ 
          └───popups.feature/ 

```
api/ This is where we have the application to install
**steps/**contain the logic developed for the automation
resources/featurres contains the steps that the .feature file use.
login.feature is a feature definition file used in behavior-based software development methodology

## Installation
Once the repository is cloned, in the command line paste the following command: 
```
npm install
```
## Usage
### Open Tests visually
```
1. Execute wdioappium, 

- Command to execute one feature at a time
 ```sh
   npm run wdio:popups
 ```


## Software needed
- [Visual Studio Code](https://code.visualstudio.com/).
- [NodeJS](https://nodejs.org/en/)
- [Chrome](https://www.google.com/intl/es_mx/chrome/)

## License
For the Volaris company only.   


