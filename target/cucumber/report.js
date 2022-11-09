$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TichFiosBankAndCashAcc.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenari01"
    },
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\" in \"UserName\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cpassword\u003e\" in \"PassWord\" field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "#And User clicks on \"\u003cnewAccount\u003e\""
    },
    {
      "line": 12,
      "value": "#And User enters \"\u003caccountTitle\u003e\" in accounts page"
    },
    {
      "line": 13,
      "value": "#And User enters \"\u003cdescription\u003e\" in accounts page"
    },
    {
      "line": 14,
      "value": "#And User enters \"\u003cinitialBalance\u003e\" in accounts page"
    },
    {
      "line": 15,
      "value": "#And User enters \"\u003caccountNumber\u003e\" in accounts page"
    },
    {
      "line": 16,
      "value": "#And User enters \"\u003ccontactPerson\u003e\" in accounts page"
    },
    {
      "line": 17,
      "value": "#And User enters \"\u003cPhone\u003e\" in accounts page"
    },
    {
      "line": 18,
      "value": "#And User enters \"\u003cinternetBankingURL\u003e\" in accounts page"
    },
    {
      "line": 19,
      "value": "#And User clicks on \"\u003cnewAccount\u003e\""
    },
    {
      "line": 20,
      "value": "#Then User should be able to validate account created successfully"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Scenari01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\" in \"UserName\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"abc123\" in \"PassWord\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepsdefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 3509666700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "UserName",
      "offset": 40
    }
  ],
  "location": "Stepsdefination.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 267852100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "PassWord",
      "offset": 29
    }
  ],
  "location": "Stepsdefination.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 154325200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 16
    }
  ],
  "location": "Stepsdefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 1616462500,
  "status": "passed"
});
formatter.match({
  "location": "Stepsdefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 44107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbankCash\u003e",
      "offset": 16
    }
  ],
  "location": "Stepsdefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 616886000,
  "status": "passed"
});
});