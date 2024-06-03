import { useCallback } from "react";
import { TaskContext } from "./task-context";

export const TaskProvider = (props) => {
  const { tasks, setTasks } = props;
  const findById = (id) => tasks.find((task) => task.id === id);

  const context = {
    updateTask: useCallback((item) => {
      const task = findById(item.id);
      task.title = item.title;
      task.description = item.description;
      setTasks([...tasks]);
    }, [tasks, findById, setTasks]),
    removeTask: useCallback((id) => {
      const task = findById(id);
      if (task) {
        setTasks(tasks.filter((item) => item.id !== task.id));
      }
    }, [tasks, findById, setTasks]),
    getTaskById: findById,
    getTasksByState: (status) => {
      return tasks.filter((task) => task.status === status);
    },
    getTasksByExcludedState: (status) => {
      return tasks.filter((task) => task.status !== status);
    },
    moveTask: useCallback((id, status) => {
      const task = findById(id);
      if (task) {
        task.status = status;
      }
      setTasks([...tasks]);
    }, [tasks, findById, setTasks]),
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};
