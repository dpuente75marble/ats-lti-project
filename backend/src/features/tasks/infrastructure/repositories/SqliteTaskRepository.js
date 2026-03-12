const TaskRepository = require("../../domain/repositories/TaskRepository");
const Task = require("../../domain/entities/Task");

class SqliteTaskRepository extends TaskRepository {
  constructor(db) {
    super();
    this.db = db;
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM tasks", [], (err, rows) => {
        if (err) {
          return reject(err);
        }

        const tasks = rows.map(
          (row) =>
            new Task({
              id: row.id,
              title: row.title,
              status: row.status,
            }),
        );

        resolve(tasks);
      });
    });
  }
}

module.exports = SqliteTaskRepository;
