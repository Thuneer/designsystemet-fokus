/* eslint-disable @next/next/no-img-element */
import { Container } from "react-bootstrap";
import classes from "./Bar.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HouseIcon,
  XMarkIcon,
  CogIcon,
  ChevronLeftIcon,
} from "@navikt/aksel-icons";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import { Heading, Switch } from "@digdir/design-system-react";
import NextLink from "next/link";

export const Bar = () => {
  const [theme, setTheme] = useState("lightmode");
  const [fokus, setFokus] = useState("transparent");

  const [paneState, setPaneState] = useState(false);

  const setThemeFunc = (theme: string) => {
    document.body.classList.remove("lightmode");
    document.body.classList.remove("darkmode");
    document.body.classList.add(theme);
    setTheme(theme);
  };

  const test = (e: any) => {
    setThemeFunc(e.target.checked ? "darkmode" : "lightmode");
  };

  return (
    <div className={classes.bar}>
      <button
        className={classes.toggle}
        onClick={() => setPaneState(!paneState)}
      >
        {!paneState && <CogIcon title="a11y-title" fontSize="1.5rem" />}
        {paneState && <XMarkIcon title="a11y-title" fontSize="1.5rem" />}
      </button>

      <SlidingPane
        className={classes.pane}
        isOpen={paneState}
        from="right"
        width="410px"
        onRequestClose={() => setPaneState(false)}
        hideHeader
      >
        <NextLink href="/" className={classes.back}>
          <ChevronLeftIcon title="a11y-title" fontSize="1.5rem" /> Alle demoer
        </NextLink>
        <Heading size="xsmall">Innstillinger</Heading>
        <Switch position="left" size="medium" onChange={(e) => test(e)}>
          Darkmode
        </Switch>
      </SlidingPane>

      <Container className={classes.container} style={{ display: "none" }}>
        <div className={classes.group}>
          <div className={classes.heading}>Fokus:</div>
          <div className={classes.items}>
            <button className={cn(classes.btn, classes.active)} tabIndex={-1}>
              White
            </button>
            <button className={cn(classes.btn)} tabIndex={-1}>
              Transparent
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
              Light
            </button>
            <button
              className={cn(
                classes.btn,
                theme === "darkmode" && classes.active
              )}
              tabIndex={-1}
              onClick={() => setThemeFunc("darkmode")}
            >
              Dark
            </button>
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.heading}>Pages:</div>
          <div className={classes.items}>
            <Link href="/" className={cn(classes.btn)} tabIndex={-1}>
              Front
            </Link>
            <Link href="/article" className={cn(classes.btn)} tabIndex={-1}>
              Article
            </Link>
            <Link href="login" className={cn(classes.btn)} tabIndex={-1}>
              Login
            </Link>
            <Link href="dashboard" className={cn(classes.btn)} tabIndex={-1}>
              Dashboard
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
