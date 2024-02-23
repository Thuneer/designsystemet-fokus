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
import { Slider } from "@mui/material";

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

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "2px",
    },
    {
      value: 40,
      label: "4px",
    },
    {
      value: 60,
      label: "8px",
    },
    {
      value: 80,
      label: "12px",
    },
    {
      value: 100,
      label: "16px",
    },
  ];

  const marks2 = [
    {
      value: 0,
      label: "Hvit",
    },
    {
      value: 50,
      label: "Transaprent",
    },
    {
      value: 100,
      label: "Gult",
    },
  ];

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

        <div className={classes.label}>Farger</div>

        <div
          className={cn(classes.colors, classes.colorsActive, classes.theme1)}
        >
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
        </div>

        <div className={cn(classes.colors, classes.theme2)}>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
          <span className={cn(classes.color, classes.red)}></span>
        </div>

        <div className={classes.label}>Border radius</div>

        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          step={20}
          valueLabelDisplay="auto"
          marks={marks}
        />

        <div className={classes.label}>Fokus typer</div>

        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={50}
          valueLabelDisplay="auto"
          marks={marks2}
        />

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
