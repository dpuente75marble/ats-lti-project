const express = require("express");
const cors = require("cors");

const db = require("../database/sqliteClient");
const initializeDatabase = require("../database/initializeDatabase");

const SqliteTaskRepository = require("../../../features/tasks/infrastructure/repositories/SqliteTaskRepository");
const GetTasks = require("../../../features/tasks/application/use-cases/GetTasks");
const TaskController = require("../../../features/tasks/presentation/http/taskController");
const createTaskRoutes = require("../../../features/tasks/presentation/http/taskRoutes");

function createApp() {
  const app = express();

  initializeDatabase(db);

  app.use(cors());
  app.use(express.json());

  const taskRepository = new SqliteTaskRepository(db);
  const getTasks = new GetTasks(taskRepository);
  const taskController = new TaskController(getTasks);
  const taskRoutes = createTaskRoutes(taskController);

  app.get("/", (req, res) => {
    res.json({
      message: "Backend ATS-LTI funcionando correctamente",
    });
  });

  app.use("/api/tasks", taskRoutes);

  return app;
}

module.exports = createApp;
