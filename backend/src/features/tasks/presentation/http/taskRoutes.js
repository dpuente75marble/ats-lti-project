const express = require("express");

function createTaskRoutes(taskController) {
  const router = express.Router();

  router.get("/", taskController.getAll);

  return router;
}

module.exports = createTaskRoutes;
