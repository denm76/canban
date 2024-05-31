import { Routes, Route } from "react-router-dom";
import TaskDetail from "../TaskDetail/TaskDetail";
import Board from "../Board/Board";
import classes from "./Main.module.css";

export default function Main(props) {
  return (
    <main className={classes.main}>
      <Routes>
        <Route exact path={"/"} element={<Board {...props} />}></Route>
        <Route
          path={"/tasks/:taskId"}
          element={<TaskDetail {...props} />}
        ></Route>
      </Routes>
    </main>
  );
}
