const express = require('express');
const router = express.Router();
const {openConnection} = require('../base de datos/conectdb');

const db = openConnection('base de datos/bd.sqlite3')

router.post('/login',async (req,res)=>{
    const { user, password } = req.body;
    let val = false;
    let rol = '';
    console.log(user);
    sql = `SELECT contraseña,tipo_usuario FROM usuarios WHERE  usuario = '${user}'`
    try {
        const rows = await new Promise((resolve, reject) => {
            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        console.log(rows);

        rows.forEach(row => {
            console.log(row.contraseña);
            console.log(password);
            if (row.contraseña === password) {
                val = true;
                rol = row.tipo_usuario;
            }
        });

        console.log(val);

        if (val === true) {
            return res.status(200).json({ message: 'Inicio de sesión exitoso' , tipo: rol});
        } else {
            return res.status(404).json({ error: 'Usuario no encontrado o contraseña incorrecta' });
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;