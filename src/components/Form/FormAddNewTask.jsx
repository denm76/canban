import { useState } from "react";
import Button from "../Button/Button";
import classes from "./Form.module.css";
import clsx from "clsx";

export default function FormAddNewTask(props) {
  const {addNewTask, setFormVisible} = props;
  const [values, setValues] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.title){
      addNewTask(values.title, values.description);
      setFormVisible(false);
    }else {
      e.target.firstChild.style = "border-color:red;";
      e.target.firstChild.placeholder = 'Field required!';
    }
  }

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({...values, [fieldName]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        className={classes.form__input}
        id="taskTitle"
        name="title"
        type="text"
        placeholder="Enter task title"
        onChange={handleChange}
        value={values.title}
      />
      <textarea
        className={clsx(classes.form__input, classes.form__textarea)}
        id="taskDescription"
        name="description"
        placeholder="Enter task description"
        value={values.description}
        onChange={handleChange}
      />
      <Button className={classes.form__button} type="submit">
        Submit
      </Button>
    </form>
  );
}
