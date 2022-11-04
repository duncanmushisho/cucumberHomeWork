@Regression
Feature: Techfios bank and cash New Account Functionality

@Scenari01 @Smoke
  Scenario: User should be able to login with valid credentials and open a new account
    Given User is on the techfios login page
    When User enters the username "demo@techfios.com"
    When User enters the password"abc123"
    And User clicks on login
    Then User should land on Dashboard page
    When User clicks on bankCash
    When User clicks on newAccount
    When User enters "<accountTitle>" in accounts page
    When User enters description"<description>" in accounts page
    When User enters initialBalance"<initialBalance>" in accounts page
    When User enters accountNumber"<accountNumber>" in accounts page
    When User enters contactPerson"<contactPerson>" in accounts page
    When User enters Phone"<>" in accounts page
    When User enters internetBankingURL"<internetBankingURL>" in accounts page
    When User clicks on "<newAccount>"
    Then User should be able to validate account created successfully


@Scenario2
    Scenario: User should not be able to login with invalid credentials and open a new account
    Given User is on the techfios login page
    When User enters the username "demo@techfios.com"
    When User enters the password"demo@techfios.com"
    And User clicks on login
    Then User should land on Dashboard page
    When User clicks on bankCash
    When User clicks on newAccount
    When User enters "<accountTitle>" in accounts page
    When User enters description"<description>" in accounts page
    When User enters initialBalance"<initialBalance>" in accounts page
    When User enters accountNumber"<accountNumber>" in accounts page
    When User enters contactPerson"<contactPerson>" in accounts page
    When User enters Phone"<>" in accounts page
    When User enters internetBankingURL"<internetBankingURL>" in accounts page
    When User clicks on "<newAccount>"
    Then User should be able to validate account created successfully
    