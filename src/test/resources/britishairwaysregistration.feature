@BritishTest
Feature: british airways registration

  Scenario: british Airways registration by filling all mandatory fields
    Given launch british airways url "https://britishairways.com"
    And click on registration link
    Then click for registration page is opened
    And enter email address "dharanimadesh@gmail.com"
    Then confirm the email address "dharanimadesh@gmail.com"
    And choose the password "Test$123"
    Then confirm the password "Test$123"
    And select title "Mrs"
    Then enter First name "Dharani"
    And  enter Last name "Madesh"
    Then enter Address line1 "31 Bremore court"
    And enter Address line2 "Bremore road"
    Then enter city "London"
    And enter country/Region of residence "United Kingdom"
    Then select date of birth "27 November 1990"
    Then select gender "Female"
    And select Preferred language "English"
    Then Select checkbox "I agree to the current as notified on the website"
    Then click on join now
