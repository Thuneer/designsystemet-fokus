import { Container } from "react-bootstrap";
import classes from "./Bar.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";

export const Bar = () => {
  const [theme, setTheme] = useState("lightmode");
  const [fokus, setFokus] = useState("transparent");

  const setThemeFunc = (theme: string) => {
    document.body.classList.remove("lightmode");
    document.body.classList.remove("darkmode");
    document.body.classList.add(theme);
    setTheme(theme);
  };

  return (
    <div className={classes.bar}>
      <Container className={classes.container}>
        <div className={classes.group}>
          <div className={classes.heading}>Fokus:</div>
          <div className={classes.items}>
            <button className={cn(classes.btn, classes.active)} tabIndex={-1}>
              Transparent
            </button>
            <button className={cn(classes.btn)} tabIndex={-1}>
              White
            </button>
            <button className={cn(classes.btn)} tabIndex={-1}>
              Yellow
            </button>
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.heading}>Theme:</div>
          <div className={classes.items}>
            <button
              className={cn(
                classes.btn,
                theme === "lightmode" && classes.active
              )}
              tabIndex={-1}
              onClick={() => setThemeFunc("lightmode")}
            >
              Light mode
            </button>
            <button
              className={cn(
                classes.btn,
                theme === "darkmode" && classes.active
              )}
              tabIndex={-1}
              onClick={() => setThemeFunc("darkmode")}
            >
              Dark mode
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
