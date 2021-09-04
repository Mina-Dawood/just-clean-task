# JustCleanTask
![JustClean Logo](https://github.com/Mina-Dawood/just-clean-task/blob/master/src/assets/images/icons/jc-logo.svg?raw=true)

### Live <a href="https://justclean-task.netlify.app/" target="_blank">Demo</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/3ae19cde-fdd5-49ef-8d0e-5eb50f018e93/deploy-status)](https://app.netlify.com/sites/justclean-task/deploys)

## How to run this app

1. Open your terminal
2. Clone this repo by run this command
`git clone https://github.com/Mina-Dawood/just-clean-task.git`
3. Run `cd just-clean-task`
4. Run `npm install`
5. Run `npm start`

## Features

- Display all items in cards style.
- Filter by Country.

## Assumptions

1. We have home page to enter to the app.
2. `Get Started` button in home page simulating user login.
3. `Authentication Guard` is added to prevent accessing on item list page until user clicked on `Get Started`, Then it should be directed to home page.
4. `JWT Interceptor` is added to intercept any request and add `Authorization & Content-Type` headers to the request.
5. `Localization` is added for English only, but the implementation is built to serve multi languages.
6. No Pagination on item list page.


## Technology & Libraries


- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.
- `SCSS` as a pre-processor for CSS to give us new features not exists in the CSS.
- `@ngx-translate` for localizing the app (it just used on item list page for "Item List" title).
- `netlify` for deployment.




## Backend APIs

- Only one API return all items [https://my-json-server.typicode.com/sagar-justclean/mock-server/items](https://my-json-server.typicode.com/sagar-justclean/mock-server/items)



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/just-clean-task` directory.

## How to run unit test

1. Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
2. Open `index.html` of code coverage from this path: `coverage/just-clean-task/index.html`.
3. ![Code Coverage](https://github.com/Mina-Dawood/just-clean-task/blob/master/src/docs/code-coverage.jpg)


# Thank You

