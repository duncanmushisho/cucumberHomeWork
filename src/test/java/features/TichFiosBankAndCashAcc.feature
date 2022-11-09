Feature: Techfios bank and cash New Account Functionality

  @Scenari01 @Smoke
  Scenario Outline: User should be able to login with valid credentials and open a new account
    Given User is on the techfios login page
    When User enters the "<username>" in "UserName" field
    When User enters the "<password>" in "PassWord" field
    And User clicks on "<login>"
    Then User should land on Dashboard page
    And User clicks on "<bankCash>"
    #And User clicks on "<newAccount>"
    #And User enters "<accountTitle>" in accounts page
    #And User enters "<description>" in accounts page
    #And User enters "<initialBalance>" in accounts page
    #And User enters "<accountNumber>" in accounts page
    #And User enters "<contactPerson>" in accounts page
    #And User enters "<Phone>" in accounts page
    #And User enters "<internetBankingURL>" in accounts page
    #And User clicks on "<newAccount>"
    #Then User should be able to validate account created successfully
    Examples: 
      | username          | password |
      | demo@techfios.com | abc123   |
