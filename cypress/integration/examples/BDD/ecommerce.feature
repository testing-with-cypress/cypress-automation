Feature: End to end Ecommerce validation

  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total price
    Then select the country submit and verify thank you message

  Scenario: Filling form to shop
    Given I open Ecommerce Page
    When I fill the form details
    |name |gender |
    |Adam |Female |
    Then Validate the form behaviour
    And Navigate to the shop page