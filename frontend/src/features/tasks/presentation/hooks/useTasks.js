import { useEffect, useState } from "react";
import { getTasks } from "../../application/use-cases/getTasks";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTasks() {
      try {
        const result = await getTasks();
        setTasks(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
  };
}
