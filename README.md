## This project shows how to use cypress:

- Fixtures
- Commands
- End-to-end testing
- Update configurations (globally and per spec file)
- Add cucumber (BDD) as a plugin into cypress

## Available Scripts

In the project directory, you can run:

### `yarn cypress:open`

- It opens cypress GUI which has a list of the available test files (cypress/integration).
- To run a specific file just click on it.

### `yarn cypress:run`

It runs all your test files in headless-mode (means run it in the terminal without opening it in the browser).

### `yarn cypress:runHeaded`

It runs all your test files in headed-mode (means run it in the browser).

## Cucumber

This project has `cypress-cucumber-preprocessor` plugin

### `npx cypress-tags run -e TAGS="@tagName" --headed`

It runs only the specific cucumber scenario.