const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const routerApi = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/app', express.static('public'));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

routerApi(app);

server.listen(PORT, () => {
    console.log(`La applicación está escuchando en http://localhost:${PORT}`)
});
