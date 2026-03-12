const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../../../../database", "ats-lti.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error al conectar con SQLite:", err.message);
  } else {
    console.log("Conectado a SQLite en:", dbPath);
  }
});

module.exports = db;
