const express = require('express');
const { Server } = require('socket.io');
const router = require('./usuarios')
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const server = app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});

const {openConnection} = require('../base de datos/conectdb');
const db = openConnection('base de datos/bd.sqlite3')
const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
console.log(sessionId);

sql=`INSERT INTO sesiones (nombre) VALUES (?);`;
db.run(sql,[sessionId],(err)=>{
    if (err) return console.error(err.message);
});

const io = new Server(server, { cors: { origin: 'http://localhost:4200' } });

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.on('message', (data) => {
        console.log(data);
        const segmento = data.split(':');
        socket.broadcast.emit('received', { data: segmento[1], mensajero: segmento[0],rol:segmento[2] });
        
        sql=`INSERT INTO mensajes (id_sesion, nombre_usuario, mensaje) VALUES (?, ?, ?);`;
        db.run(sql,[sessionId,segmento[0],segmento[1]],(err)=>{
            if (err) return console.error(err.message);
        });
    });
});


app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
