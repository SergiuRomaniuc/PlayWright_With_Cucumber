Feature: User Authentication tests

Background:
    Given User navigates to the log in page

Scenario: 
    And User enters the username as "tomsmith"
    And User enters the password as "SuperSecretPassword!"
    When User click on the Login button 
    Then Secure area should be displayed


Scenario: 
    And User enters the username as "tommyG"
    And User enters the password as "Hello World"
    When User click on the Login button 
    Then Your password is invalid should be displayed