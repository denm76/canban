import List from "../List/List";
import { LIST_TYPES, LIST_COPY } from "../../config";
import classes from "./Board.module.css";
import uniqid from 'uniqid'

export default function Board(props) {
  const { tasks, setTasks } = props;

  const addNewTask = (title, description) => {
    const newTask = {
      id: uniqid(),
      title: title, 
      description: description,
      status: LIST_TYPES.BACKLOG
    };
    setTasks([...tasks, newTask])
  };


  return (
    <div className={classes.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type);
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={listTasks}
						addNewTask={addNewTask}
          />
        );
      })}
    </div>
  );
}
