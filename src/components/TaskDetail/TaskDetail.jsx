import classes from "./TaskDetail.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import Chancel from "../../assets/chancel.png";
import { useTasks } from "../../hooks/task/use-task";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function TaskDetail(props) {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const { tasks } = props;

  const currentTask = tasks.find((task) => task.id === taskId);
  const { getTaskById, updateTask } = useTasks();
  const [task, setTask] = useState(currentTask);
  const navigateBack = () => navigate(-1);

  useEffect(() => {
    if (taskId) {
      setTask(getTaskById(taskId));
    }
  }, [taskId, getTaskById]);

  return (
    <div className={classes.task__wrapper}>
      {task ? (
        <>
          <Link className={classes.task__chancellink} to={"/"}>
            <img className={classes.task__img} src={Chancel} alt="chancel" />
          </Link>

          <textarea
            className={classes.task__title}
            value={task.title}
            onChange={(e) =>
              setTask({
                ...task,
                title: e.target.value,
              })
            }
          />
          <textarea
            className={classes.task__description}
            value={task.description || "This task has no description"}
            onChange={(e) => {
              setTask({
                ...task,
                description: e.target.value,
              });
            }}
          />
          <Button onClick={()=>{
            console.log(task);
            updateTask(task);
            navigateBack(-1);
          }}>Save Task</Button>
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
