const express = require('express')
const app = express()
const port = 3000

const csv = require('csv-parser');  
const fs = require('fs');

// fs.createReadStream(__dirname + '/data.csv')  
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });


//   fs.createReadStream(__dirname + '/tweets.json')  
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });


app.get('/', (req, res) => res.sendFile(__dirname + '/line_display.html'))
app.listen(port, () => console.log(`App listening on port ${port}!`))