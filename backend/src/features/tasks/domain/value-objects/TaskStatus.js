class TaskStatus {
  static VALID_STATUSES = ["pending", "in_progress", "done"];

  constructor(value) {
    if (!TaskStatus.VALID_STATUSES.includes(value)) {
      throw new Error(`Invalid task status: ${value}`);
    }

    this.value = value;
  }
}

module.exports = TaskStatus;
