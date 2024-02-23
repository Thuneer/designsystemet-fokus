/* eslint-disable @next/next/no-img-element */
import classes from "./Header.module.css";
import { Container } from "react-bootstrap";
import { Button } from "@digdir/design-system-react";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <img src="img/logo.svg" alt="Logo" height="28px" />
        </div>
        <div className={classes.middle}>
          <ul className={classes.menu}>
            <li>
              <a href="#" className={classes.link}>
                Områder
              </a>
            </li>
            <li>
              <a href="#" className={classes.link}>
                Rapporter
              </a>
            </li>
            <li>
              <a href="#" className={classes.link}>
                Om Digdir
              </a>
            </li>
            <li>
              <a href="#" className={classes.link}>
                Kontakt oss
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          <Button variant="secondary" size="small">
            Registrer ny bruker
          </Button>
          <Button size="small">Registrer ny bruker</Button>
        </div>
      </Container>
    </header>
  );
};
