# Getting Started with Create React App


## Available Scripts

In the project directory, you can run:

### `npm i netlify-cli -g` 

Used to install netlify, used to deploy the site


### `netlify dev`

To deploy the site for development usage

### `npm start`

To deploy the site, specifiying `./public` as the directory.


If on windows, you may need to run the command `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` in the powershell to enable scripts to be run.


If setting up Github integration on the app.netlify.com site, set the build command to `CI=false npm run build` to prevent warnings from being treated as errors.