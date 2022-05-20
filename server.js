const express = require('express')

var app = express();

app.get('/message', (req, res) => {
    res.send('Lista de Mensajes')
})

app.post('/message', (req, res) => {
    res.send('Mensaje añadido')
})

app.listen('3000')

console.log('La applicación está escuchando en http://localhost:3000')