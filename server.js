const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/message', (req, res) => {
    res.send('Lista de Mensajes')
    console.log('BODY', req.body)
    console.log('QUERY', req.query)
})

app.post('/message', (req, res) => {
    res.send('Mensaje añadido')
})

app.listen(PORT, () => {
    console.log(`La applicación está escuchando en http://localhost:${PORT}`)
});
