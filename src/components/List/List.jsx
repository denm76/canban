import { useState } from "react";
import Button from "../Button/Button";
import FormAddNewTask from "../Form/FormAddNewTask";
import classes from "./List.module.css";
import { LIST_TYPES } from "../../config";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import Chancel from "../../assets/chancel.png";
import { useTasks } from "../../hooks/task/use-task";

export default function List(props) {
  const { title, type, tasks, addNewTask } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(undefined);
  const { getTasksByState, getTasksByExcludedState, moveTask, removeTask } =
    useTasks();

  function handleClick() {
    setFormVisible(!isFormVisible);
    setIsNewTaskSelectShown(true);
  }

  return (
    <div className={classes.list}>
      <Scrollbars autoHeightMax={500} autoHide autoHeight>
        <h2 className={classes.list__title}>{title}</h2>
        {tasks.map((task) => {
          return (
            <div className={classes.list__taskwrapper}>
              <Link
                key={task.id}
                to={`/tasks/${task.id}`}
                className={classes.list__taskLink}
              >
                <div className={classes.list__task}>{task.title}</div>
              </Link>
              <Button
                className={classes.list__removetaskbtn}
                onClick={() => removeTask(task.id)}
              >
                <img
                  src={Chancel}
                  alt="remove task"
                  className={classes.list__img}
                />
              </Button>
            </div>
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
        {type !== LIST_TYPES.BACKLOG && isFormVisible && isNewTaskSelectShown && (
          <div className={classes.list__selection}>
            <select onChange={(e) => setSelectedTaskId(e.target.value)}>
              <option>Select Task</option>
              {getTasksByExcludedState(type).map((task) => (
                <option key={task.id} value={task.id}>
                  {task.title}
                </option>
              ))}
            </select>
            <Button
              className={classes.list__submitbutton}
              onClick={() => {
                setIsNewTaskSelectShown(false);
                moveTask(selectedTaskId, type);
              }}
            >
              Submit
            </Button>
          </div>
        )}
      </Scrollbars>
    </div>
  );
}
