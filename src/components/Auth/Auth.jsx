import classes from "./Auth.module.css";
import Avatar from "../../assets/user.png";
import Arrow from "../../assets/down.png"
import Button from "../Button/Button";
import { useState } from "react";
import useToggleVisibility from "../../hooks/useToggleVisbility";

export default function Auth() {
  const [isPressed, setIsPressed] = useState(false);
  const isVisible = useToggleVisibility(isPressed);
  const changeVisible = () => setIsPressed((prevIsPressed) => !prevIsPressed);

  return (
    <div className={classes.auth__wrapper} onClick={changeVisible}>
      <img src={Avatar} alt="avatar" className={classes.auth__avatar} />
      <img
        src={Arrow}
        alt="arrow"
        className={`${classes.auth__arrow} ${isPressed ? classes.auth__visible : ""}`}
      />

      {isVisible && (
        <div className={classes.auth__menu}>
          <Button className={classes.auth__button}>Profile</Button>
          <Button className={classes.auth__button}>Log Out</Button>
        </div>
      )}
    </div>
  );
}
