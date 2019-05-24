const express = require('express')

const port = 3000
const app = express()

app.set('port', process.env.PORT || port);
app.use(express.static(__dirname + '/static'));

app.get('/', (req ,res) => res.sendFile(__dirname + '/index.html'))

app.listen(process.env.PORT || port, () => {
    console.log(`App listening on port ${port}`)
 });
