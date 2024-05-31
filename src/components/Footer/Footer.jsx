import { getFooterData } from "../../utils";
import classes from "./Footer.module.css";

export default function Footer(props) {
  const { tasks } = props;
  let [activeTasks, finishedTasks] = getFooterData(tasks);

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__tasks}>
        <div className={classes.footer__activetasks}>
          Active tasks: {activeTasks}
        </div>
        <div className={classes.footer__finishedtasks}>
          Finished tasks: {finishedTasks}
        </div>
      </div>
      <div className={classes.footer__author}>
        Kanban board by Den Morozov, 2024
      </div>
    </footer>
  );
}
