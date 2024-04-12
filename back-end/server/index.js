const express = require('express');
const { Server } = require('socket.io');
const router = require('./usuarios')
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const server = app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});

const io = new Server(server, { cors: { origin: 'http://localhost:4200' } });

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.on('message', (data) => {
        console.log(data);
        const segmento = data.split(':');
        socket.broadcast.emit('received', { data: segmento[1], mensajero: segmento[0],rol:segmento[2] });
    });
});


app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
