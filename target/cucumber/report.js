$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TichFiosBankAndCashAcc.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenari01"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the password\"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bankCash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters description\"\u003cdescription\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters initialBalance\"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters accountNumber\"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters contactPerson\"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone\"\u003c\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters internetBankingURL\"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on \"\u003cnewAccount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepsdefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 2696688700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 26
    }
  ],
  "location": "Stepsdefination.user_enters_the_username(String)"
});
formatter.result({
  "duration": 3109901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "Stepsdefination.user_enters_the_password(String)"
});
formatter.result({
  "duration": 3080102800,
  "status": "passed"
});
formatter.match({
  "location": "Stepsdefination.user_clicks_on_login()"
});
formatter.result({
  "duration": 4030889600,
  "status": "passed"
});
formatter.match({
  "location": "Stepsdefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 8196600,
  "status": "passed"
});
formatter.match({
  "location": "Stepsdefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 54477300,
  "status": "passed"
});
formatter.match({
  "location": "Stepsdefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 289665200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003caccountTitle\u003e",
      "offset": 13
    }
  ],
  "location": "Stepsdefination.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 81627700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cdescription\u003e",
      "offset": 24
    }
  ],
  "location": "Stepsdefination.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 79872300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinitialBalance\u003e",
      "offset": 27
    }
  ],
  "location": "Stepsdefination.user_enters_initialBalance_in_accounts_page(String)"
});
formatter.result({
  "duration": 85593200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003caccountNumber\u003e",
      "offset": 26
    }
  ],
  "location": "Stepsdefination.user_enters_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 71047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccontactPerson\u003e",
      "offset": 26
    }
  ],
  "location": "Stepsdefination.user_enters_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 74769800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c\u003e",
      "offset": 18
    }
  ],
  "location": "Stepsdefination.user_enters_Phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 78258300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cinternetBankingURL\u003e",
      "offset": 31
    }
  ],
  "location": "Stepsdefination.user_enters_internetBankingURL_in_accounts_page(String)"
});
formatter.result({
  "duration": 83795300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnewAccount\u003e",
      "offset": 16
    }
  ],
  "location": "Stepsdefination.user_clicks_on(String)"
});
formatter.result({
  "duration": 507446700,
  "status": "passed"
});
formatter.match({
  "location": "Stepsdefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 728458500,
  "status": "passed"
});
});