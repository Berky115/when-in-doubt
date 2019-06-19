## WHat is Babel?
- Babel is a transpiling tool that lets the most recent versions of ES6 be written. Then translated to something
that is understood by older browsers.

- Setup follows these steps


A BARE BASIC version of the package.json will look like this

- Create a new folder, such as ch03/babel-jsx-test.

- Create a package.json file in the new folder and enter an empty object {} in it, or use npm init to generate the file.
-Define your Babel presets in package.json (used in this book and explained in the next section) or .babelrc (not used in this book).
-Optionally, fill package.json with information such as the project name, license, GitHub repository, and so on.
-Install the Babel CLI and React preset locally, using npm i babel-cli@6.9.0 babel-preset-react@6.5.0 --save-dev to save these dependencies in devDependencies in package.json.
Optionally, create an npm script with one of the Babel commands described shortly.

"babel" : {
    "presents": ["react"]
}

to transpile. Use this command

```
$ ./node_modules/.bin/babel js/script.jsx -o js/script.js
```