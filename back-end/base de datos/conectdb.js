const sqlite3 = require('sqlite3').verbose();

function openConnection(databasePath) {
    return new sqlite3.Database(databasePath);
}

module.exports = {openConnection};