
@BritishTest
Feature: British airways login

  
  Scenario: British airways login with all mandatory fields
    Given launch british airways url "https://britishairways.com"
    And enter valid login ID "dharanimadesh@gmail.com"
    Then enter valid password "Test$123"
    And check for login page entered successfully

  
  Scenario Outline: British airways with invalid inputs
    Given launch british airways url "https://britishairways.com"
    And enter invalid login ID "req@gmail.com"
    Then enter valid password "Test$123"
    And check for error message

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
