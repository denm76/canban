import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks') || []);
  const [tasks, setTasks] = useState(initialState);

  useEffect(()=>{
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
