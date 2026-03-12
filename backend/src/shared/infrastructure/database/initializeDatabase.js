function initializeDatabase(db) {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        status TEXT NOT NULL
      )
    `);

    db.get("SELECT COUNT(*) AS count FROM tasks", (err, row) => {
      if (err) {
        console.error("Error al comprobar tareas:", err.message);
        return;
      }

      if (row.count === 0) {
        const stmt = db.prepare(
          "INSERT INTO tasks (title, status) VALUES (?, ?)",
        );

        stmt.run("Configurar frontend con React", "done");
        stmt.run("Crear backend con Express", "done");
        stmt.run("Conectar base de datos SQLite", "in_progress");

        stmt.finalize();

        console.log("Tareas de ejemplo insertadas correctamente");
      }
    });
  });
}

module.exports = initializeDatabase;
