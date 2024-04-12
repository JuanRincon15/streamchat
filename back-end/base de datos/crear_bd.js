const sqlite3 = require('sqlite3').verbose();
let sql;

// Abrir una conexión con la base de datos (creará la base de datos si no existe)
const db = new sqlite3.Database('bd.sqlite3',sqlite3.OPEN_READWRITE,(err) => {
    if (err) return console.error(err.message);
});

sql = `


CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_sesion VARCHAR(100),
    nombre_usuario VARCHAR(100),
    mensaje TEXT,
    FOREIGN KEY (id_sesion) REFERENCES sesiones(nombre)
);

`

db.run(sql);