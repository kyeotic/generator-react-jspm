#A Yeoman Generator for React, Redux, and jspm

##app generator (default)

Takes one argument, `name`, which will be used in the `package.json` file and the `index.html`.

This generator sets up a new project in the current directory with
* A node server
* A `src` directory for all client JavaScript
  * Standard redux boilerplate for store, actions, and reducers
  * A `main.js` file that bootstraps the app
  * A `containers` directory with boilerplate components
* `package.json`
  * jspm configured to run and build out of the `src` folder
  * dependencies and devDependencies already configured for
    * React
    * Redux
    * Stylus
    * PM2
  * Scripts for
    * Building or watching `assets/stylus`
    * Packaging jspm with self-executing bundling

##component generator (sub-generator)

Takes one argument, `name`, which is used for the filename and the class name of the component. Casing will be handled automatically: camelCase for the file, PascalCase for the class name.

Creates a file with empty boilerplate for an ES6 class component, including `imports` for `React`, `Component`, and `PropTypes`.

