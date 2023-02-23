const express = require('express');

const PORT = 3000

var app = express();

app.get('/', function(req, res) {
    res.send('Hello, world')
});
app.listen(PORT, () => {
    console.log(`App listening on http://127.0.0.1:3000`);
});