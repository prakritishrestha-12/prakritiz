## About repo
This is a test automation repo for https://responsivefight.herokuapp.com based on Cypress framework.</br> 
Cypress framework is a JavaScript-based end-to-end testing framework built on top of Mocha. </br> 
Some readings on why cypress and cypress setup guidelines:
* [Why Cypress](https://docs.cypress.io/guides/overview/why-cypress)
* [Setup guidelines](https://docs.cypress.io/guides/getting-started/installing-cypress)

## To run locally
Clone repo: ```git clone https://github.com/prakritishrestha-12/prakritiz.git``` \
Install packages: ```npm install``` \
Run the test: ```npx cypress open``` \
Specs are created in /cypress/integration/game-tests.

## Generate report
Run `cypress run --reporter mochawesome` to generate mochawesome report.
