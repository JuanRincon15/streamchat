const sqlite3 = require('sqlite3').verbose();
let sql;

// Abrir una conexión con la base de datos (creará la base de datos si no existe)
const db = new sqlite3.Database('bd.sqlite3',sqlite3.OPEN_READWRITE,(err) => {
    if (err) return console.error(err.message);
});

sql = `DROP TABLE mensajes;`;
db.all(sql,[],(err,rows) =>{
    if (err) return console.error(err.message);
    rows.forEach(row=>{
        console.log(row);
    })
});