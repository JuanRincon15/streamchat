const sqlite3 = require('sqlite3').verbose();
let sql;

// Abrir una conexión con la base de datos (creará la base de datos si no existe)
const db = new sqlite3.Database('bd.sqlite3',sqlite3.OPEN_READWRITE,(err) => {
    if (err) return console.error(err.message);
});

sql = "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT,nombre VARCHAR(255),usuario VARCHAR(50) UNIQUE,contraseña VARCHAR(255),tipo_usuario VARCHAR(20) CHECK(tipo_usuario IN ('estudiante', 'moderador')));"

db.run(sql);