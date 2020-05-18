const express = require('express');
var app = express();

app.get('/', (req, res) => res.send('This is root 4 thou damn!'))
app.get('/hola', (req, res) => res.send('Hot doofus daniel'));

app.listen(4000, () => console.log('Listening at http://localhost:4000'));