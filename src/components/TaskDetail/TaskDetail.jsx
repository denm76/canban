import classes from "./TaskDetail.module.css";
import { Link, useParams } from "react-router-dom";
import Chancel from "../../assets/chancel.png";

export default function TaskDetail(props) {
  const { taskId } = useParams();
  const { tasks } = props;

  const task = tasks.find((task) => task.id === taskId);
  console.log(task);

  return (
    <div className={classes.task__wrapper}>
      {task ? (
        <>
          <div className={classes.task__header}>
            <h2 className={classes.task__title}>{task.title}</h2>
            <Link to={"/"}>
              <img
                src={Chancel}
                alt="chancel"
                className={classes.task__chancellink}
              />
            </Link>
          </div>
          <div className={classes.task__description}>
            {task.description || "This task has no description"}
          </div>
        </>
      ) : (
        <>
          <div className={classes.task__header}>
            <h2>Task #{taskId} not found!</h2>
            <Link to={"/"}>
              <img
                src={Chancel}
                alt="chancel"
                className={classes.task__chancellink}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
