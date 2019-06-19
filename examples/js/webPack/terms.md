## Why use Webpack?

- Manage and bundle dependencies from npm modules, so you don’t have to manually download files from the internet, and include them with <script> tags in HTML

- Transpile JSX into regular JavaScript while providing source maps for easier debugging
- Manage styles
- Perform hot module reloading
- Build a development web server

# build and run
- steps here: https://facebook.github.io/create-react-app/docs/deployment

```
npm run build
npm install -g serve
serve -s build //serve -s build -l 4000 to set specific port
```