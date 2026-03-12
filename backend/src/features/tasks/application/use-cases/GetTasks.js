class GetTasks {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute() {
    return this.taskRepository.getAll();
  }
}

module.exports = GetTasks;
