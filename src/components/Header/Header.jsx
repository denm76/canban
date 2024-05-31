import Auth from "../Auth/Auth";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>Awesome Kanban Board</h1>
      <Auth />
    </header>
  );
}
