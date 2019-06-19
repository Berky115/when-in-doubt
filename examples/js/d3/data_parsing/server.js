const express = require('express')
const app = express()
const port = 3000

const csv = require('csv-parser');  
const fs = require('fs');

app.get('/', (req, res) => res.sendFile(__dirname + '/data_parsing.html'))
app.listen(port, () => console.log(`App listening on port ${port}!`))