import { useState } from "react";
import Button from "../Button/Button";
import FormAddNewTask from "../Form/FormAddNewTask";
import classes from "./List.module.css";
import { LIST_TYPES } from "../../config";
import { Link } from "react-router-dom";

export default function List(props) {
  const { title, type, tasks, addNewTask } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  function handleClick() {
    setFormVisible(!isFormVisible);
  }

  return (
    <div className={classes.list}>
      <h2 className={classes.list__title}>{title}</h2>
      {tasks.map((task) => {
        return (
          <Link
            key={task.id}
            to={`/tasks/${task.id}`}
            className={classes.list__taskLink}
          >
            <div className={classes.list__task}>{task.title}</div>
          </Link>
        );
      })}
      <Button className={classes.list__addButton} onClick={handleClick}>
        + Add card
      </Button>
      {type === LIST_TYPES.BACKLOG && isFormVisible && (
        <FormAddNewTask
          addNewTask={addNewTask}
          setFormVisible={setFormVisible}
        />
      )}
    </div>
  );
}
