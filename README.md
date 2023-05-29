<h1 align="center">Supertest POM</h1></br>

<p align="center">
:sparkles: API Testing using Javascript, Supertest, Mocha, Chai, Mochawesome for HTML Report,  & POM Design Pattern :sparkles:
</p>

## Preparation

What will be used on this project

| Item           | Source                                                         |
| -------------- | ------------------------------------------------------------ |
| Editor         | VS Code (https://code.visualstudio.com/download) |
| Package Manager| NPM (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| API Test Tools | Chai (https://www.npmjs.com/package/chai) |
|                | Supertest (https://www.npmjs.com/package/supertest) |
|                | Dotenv (https://www.npmjs.com/package/dotenv) |
| Test Reporter  | Mochawesome (https://www.npmjs.com/package/mochawesome) |
| Run on         | Terminal or Command Prompt  |

## Pre-Requisite Installation

Install VS Code Editor and NPM.

To check whether you already installed NPM & Node.js

```Bash
npm --version
```
```Bash
node --version
```

## Setting up Project

### Clone

**👉 [Clone this Repository](https://github.com/Fatimazza/SupertestPOM/)** through Terminal or Command Prompt

### Open the Project on Editor

Open this Automation Project using VS Code Editor.

### Run the Automation Project 

Change to Project directory on Terminal or Command Prompt

```Bash
cd SupertestPOM
```

Run All Tests on Terminal

```Bash
mocha test/api/
```

Run Specific Test

```Bash
mocha test/get-apod.test.js 
```

### Run the Automation Project with HTML Report

Install Mochawesome Reporter

```Bash
npm install mochawesome
```

Run API Test with the Reporter

> Note: Please wait until all test execution finished

All Test

```Bash
npm run test
```

Test HTML Report

:white_check_mark: available on <b> /SupertestPOM/report/report.html </b>

