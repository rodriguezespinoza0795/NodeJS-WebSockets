const express = require('express')
const routerApi = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/app', express.static('public'));

routerApi(app);

app.listen(PORT, () => {
    console.log(`La applicación está escuchando en http://localhost:${PORT}`)
});
