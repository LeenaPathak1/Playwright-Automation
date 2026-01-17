Feature: Client App Tests
    As a user of the Client Application
    I want to be able to log in, add items to my cart, and place an order successfully.
    @Regression
    Scenario Outline: Place an order successfully
        Given Navigate to url and login with valid "<username>" and "<password>"
        When I add a specific "<productName>" to my cart
        And I proceed to place an order
        Then I should see a confirmation message with an order ID

        Examples:
          | productName   | username    | password      |
          | ZARA COAT 3   |  playwright.test@yopmail.com | Learning2025 |