# UI Automation Cypress

This automation project utilized the page object model. Here, I have Separated tests based on pages. Also, separated page objects based 
on pages in order to  abstract the interactions with the UI elements away from the test cases. 

``` kotlin
cypress/
├── fixtures/
│   └── data.json
├── support/
│   ├── commands/
│   │   └── customCommands.js
│   ├── pageObjects/
│   │   ├── Page1/
│   │   │   └── Page1Objects.js
│   │   ├── Page2/
│   │   │   └── Page2Objects.js
│   ├── wiring/
│   │   ├── Reusables/
│   │   │   └── Reusable.js
│   │   ├── Page1/
│   │   │   └── Page1Functions.js
│   │   ├── Page2/
│   │   │   └── Page2Functions.js
├── tests/
│   ├── verifyWorkflow.js
└── screenshots/
└── videos/
```

Here, I encapsulated complex interactions and verifications within the page objects. 
this ensures code reusability and maintains a clear separation of concerns.

To install the dependencies on your pc:

```node.js
npm i
```
To run the project:

```node.js
npm test
```

## Included
* cypress,
* cypress-mochawesome-reporter

## Note
Please visit [POM2.0.0](https://github.com/sultanparvez/UI-Automation-Cypress-POM/tree/POM2.0.0) branch for a different approach