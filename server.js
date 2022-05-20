const express = require('express')
const {success, error} = require('./network/response')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro Valor personalizado"
    })
    req.query.error === "ok"
    ? error(req, res, 'Error Simulado', 400)
    : success(req, res, 'Lista de Mensajes', 200)

    console.log('BODY', req.body)
    console.log('QUERY', req.query)
})

app.post('/message', (req, res) => {
    // res.status(201).send({
    //     body:'Mensaje añadido'
    // })
    success(req, res, 'Creado correctamente',201)
})

app.listen(PORT, () => {
    console.log(`La applicación está escuchando en http://localhost:${PORT}`)
});
