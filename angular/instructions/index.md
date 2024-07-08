# Premier League

## Angular Coding Challenge

### Overview
The Premier League development team have been tasked to create a Fixture Predictor game. The Business Analysts have been in touch with the stakeholder and created two user stories to match their requirements. They have provided two wireframes as a guide to fulfil the request.

Please follow the instructions below to complete the task.

When complete, please delete `node_modules` & zip the folder up and return to Premier League prior to the next recruitment stage.

### Setup
- run `npm install` to add local dependencies.
- Use only the core libraries provided in `package.json`.
- All data must be consumed from the provided API endpoints, no server-side script is needed.
- The wireframes are provided as advisory only, if you feel there are improvements to make, please make them.
- Bonus points for:
  - branding;
  - unit tests;
  - reusable components;
  - modern styling (grids, flex).

---

## Assets

You have been provided the following to complete the task:

- [API Documentation](./api.md)
- [Wireframes](./assets/wireframes)
- [CSS Variables](./assets/variables.scss)
- [Logo](./assets/logo.svg)
- [Fonts](./assets/fonts)

---
## User Requirements

### 1. Fixture Prediction Form

> **User Story**
>
> As a *user* accessing the webpage,
>
> I want to be able to see details on a fixture I'm viewing,
>
> So that I can look at the fixture and provide my best prediction for the result.
> 
> ---
> **Acceptance Criteria**
>
> - See attached wireframes in [Wireframes](./assets/wireframes)
> - The page must display the relevant fixture 
> - Example images are provided to render as fake club logos within the club object of home/away.
> - Clicking one of the prediction buttons should highlight the button green to show that it's been selected.
> - The user should be able to change their prediction at any time by clicking another button.

### 2. Fixture List

> **User Story**
>
> As a *user* accessing the webpage,
>
> I want to see a list of fixtures available to predict
>
> So that I can select a fixture I haven't responded to yet and provide my prediction.
>
> ---
> **Acceptance Criteria**
>
> - The page should be built taking inspiration from the [provided wireframe](./assets/wireframes).
> - The list should show all fixtures available from the API call.
> - Each entry in the list show detail the state of the users pending prediction.
> - Once the user provides a prediction for a fixture, the list should be updated to show the user's prediction.


