Feature: End to end Ecommerce validation
  application Regression

  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total price
    Then select the country submit and verify thank you message

  Scenario: Filling form to shop
    Given I open Ecommerce Page
    When I fill the form details
    Then Validate the form behaviour
    And Navigate to the shop page