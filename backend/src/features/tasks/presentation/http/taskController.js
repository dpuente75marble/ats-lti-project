class TaskController {
  constructor(getTasks) {
    this.getTasks = getTasks;
  }

  getAll = async (req, res) => {
    try {
      const tasks = await this.getTasks.execute();
      res.json(tasks);
    } catch (error) {
      console.error("Error al obtener las tareas:", error.message);
      res.status(500).json({ error: "Error al obtener las tareas" });
    }
  };
}

module.exports = TaskController;
