import classes from "./TaskDetail.module.css";
import { Link, useParams } from "react-router-dom";
import Chancel from "../../assets/chancel.png";
import { useTasks } from "../../hooks/task/use-task";
import { useEffect } from "react";

export default function TaskDetail(props) {
  const { taskId } = useParams();
  const { tasks } = props;
  const { getTaskById, updateTask } = useTasks();

  const task = tasks.find((task) => task.id === taskId);

  return (
    <div className={classes.task__wrapper}>
      {task ? (
        <>
          <Link className={classes.task__chancellink} to={"/"}>
            <img className={classes.task__img} src={Chancel} alt="chancel" />
          </Link>

          <textarea className={classes.task__title}>{task.title}</textarea>

          <textarea className={classes.task__description}>
            {task.description || "This task has no description"}
          </textarea>
        </>
      ) : (
        <>
          <h2>Task #{taskId} not found!</h2>
          <Link to={"/"}>
            <img
              src={Chancel}
              alt="chancel"
              className={classes.task__chancellink}
            />
          </Link>
        </>
      )}
    </div>
  );
}
