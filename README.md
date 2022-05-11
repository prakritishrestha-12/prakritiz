## About repo
This is a test automation repo for https://responsivefight.herokuapp.com based on Cypress framework.</br> 
Cypress framework is a JavaScript-based end-to-end testing framework built on top of Mocha. </br> 
Some readings on why cypress and cypress setup guidelines:
* [Why Cypress](https://docs.cypress.io/guides/overview/why-cypress)
* [Setup guidelines](https://docs.cypress.io/guides/getting-started/installing-cypress)

## To run locally
Clone repo: ```git clone https://github.com/prakritishrestha-12/prakritiz.git``` \
Install packages: ```npm install``` \
To open and run cypress with browser: ```npx cypress open``` \
To run test suites in default headless mode: `npx cypress run` </br>

Go [here](https://docs.cypress.io/guides/guides/command-line) for Cypress run command options.\
If npx isn't preinstalled check [here](https://github.com/npm/npx).

Specs are created in /cypress/integration/game-tests.

## Generate report
Run `npx cypress run --reporter mochawesome` to generate mochawesome report.
