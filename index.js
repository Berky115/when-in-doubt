const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.set('port', process.env.PORT || port);

app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
