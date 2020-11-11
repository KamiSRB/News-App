# News Application

## Used technologies

- Packages are managed using the [Yarn](https://yarnpkg.com/) package manager
- React application created using the [Create React App](https://create-react-app.dev/) tool and costomized manually
- Webpack customization is done by using the [react-app-rewired](https://github.com/timarney/react-app-rewired) package. The customized config can be found at [./config-overrides.js](./config-overrides.js)
- For types checking we use [TypeScript](https://www.typescriptlang.org/)
- Code linting and formatting is done by [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

Serves the development build from the `build` folder.

### `yarn prod`

Creates a production build and serves it.

### `yarn analyze`

Visualizes size of webpack output files with an interactive zoomable treemap.

### `yarn lint`

Runs lintig on the all included files.
This script runs automaticaly before any commit and linting checks must pass in order to commit changes successfully.

## Running the application

### First time use

#### Install used packages

```bash
yarn install
```

Run this command to install all the used node packages. If you don't have Yarn installed, install it first using the following command. If someone from the team installs new packages, you need to run this command again in order to install them on your local machine.

```bash
npm install -g yarn
```

#### Install VSCode extensions

We use [Visual Studio Code](https://code.visualstudio.com/) as a code editor for this project during development. If you don't have it installed, please install it first.

Extensions we are using for this project are [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

All needed settings are configured specifically for this project and can be found at the following locations:
VSCode settings - [.vscode\settings.json](.vscode\settings.json)
ESLint settings - [.eslintrc](.eslintrc)
Prettier settings - [.prettierrc](.prettierrc)

### Running the application

#### Run tests

```bash
yarn test
```

Please run tests before pushing your changes to the remote repository.

#### Run the development build

```bash
yarn start
```

#### Run the production build

```bash
yarn prod
```

In order to do this, you must have [serve](https://www.npmjs.com/package/serve) node package installed. You can install that package using the following command

```bash
npm install -g serve
```
