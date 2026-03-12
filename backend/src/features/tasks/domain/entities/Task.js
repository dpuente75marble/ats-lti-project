const TaskStatus = require("../value-objects/TaskStatus");

class Task {
  constructor({ id, title, status }) {
    this.id = id;
    this.title = title;
    this.status = new TaskStatus(status);
  }
}

module.exports = Task;
