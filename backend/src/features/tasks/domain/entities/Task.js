const TaskStatus = require("../value-objects/TaskStatus");

class Task {
  constructor({ id, title, status }) {
    if (!title || typeof title !== "string" || title.trim().length === 0) {
      throw new Error("Task title is required");
    }

    this.id = id;
    this.title = title.trim();
    this.status = new TaskStatus(status);
  }
}

module.exports = Task;
