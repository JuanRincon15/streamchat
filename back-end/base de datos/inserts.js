const sqlite3 = require('sqlite3').verbose();
let sql;

// Abrir una conexión con la base de datos (creará la base de datos si no existe)
const db = new sqlite3.Database('bd.sqlite3',sqlite3.OPEN_READWRITE,(err) => {
    if (err) return console.error(err.message);
});

sql=`INSERT INTO usuarios (nombre, usuario, contraseña, tipo_usuario) VALUES (?,?,?,?)`;
db.run(sql,['María López', 'maria456', 'contraseña', 'estudiante'],(err)=>{
    if (err) return console.error(err.message);
});

db.run(sql,['Pedro Gomez', 'pedro789', 'password123', 'estudiante'],(err)=>{
    if (err) return console.error(err.message);
});

db.run(sql,['Administrador', 'admin', 'adminpass', 'moderador'],(err)=>{
    if (err) return console.error(err.message);
});