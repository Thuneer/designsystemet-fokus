/* eslint-disable @next/next/no-img-element */
import { Container } from "react-bootstrap";
import classes from "./Configurator.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  HouseIcon,
  XMarkIcon,
  CogIcon,
  ChevronLeftIcon,
  MobileSmallIcon,
  TabletIcon,
  MonitorIcon,
} from "@navikt/aksel-icons";
import { Heading, Switch } from "@digdir/design-system-react";
import NextLink from "next/link";
import { Slider } from "@mui/material";

type CongifuratorProps = {
  children: React.ReactNode;
};

export const Configurator = ({ children }: CongifuratorProps) => {
  const [theme, setTheme] = useState("lightmode");
  const [fokus, setFokus] = useState("transparent");
  const [device, setDevice] = useState("desktop");

  const [paneState, setPaneState] = useState(true);

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
    <div className={classes.page}>
      <div className={classes.sidebar}>
        <button
          className={classes.toggle}
          onClick={() => setPaneState(!paneState)}
        >
          {!paneState && <CogIcon title="a11y-title" fontSize="1.5rem" />}
          {paneState && <XMarkIcon title="a11y-title" fontSize="1.5rem" />}
        </button>

        <div className={cn(classes.pane, { [classes.paneOpen]: paneState })}>
          <NextLink href="/" className={classes.back}>
            <ChevronLeftIcon title="a11y-title" fontSize="1.5rem" /> Alle demoer
          </NextLink>
          <Heading size="xsmall">Innstillinger</Heading>

          <div className={classes.label}>Device</div>
          <div className={classes.device}>
            <button
              className={classes.deviceBtn}
              onClick={() => setDevice("mobile")}
            >
              <MobileSmallIcon title="a11y-title" fontSize="1.5rem" />
            </button>
            <button
              className={classes.deviceBtn}
              onClick={() => setDevice("tablet")}
            >
              <TabletIcon title="a11y-title" fontSize="1.5rem" />
            </button>
            <button
              className={classes.deviceBtn}
              onClick={() => setDevice("desktop")}
            >
              <MonitorIcon title="a11y-title" fontSize="1.5rem" />
            </button>
          </div>

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
        </div>
      </div>

      <div
        className={cn(
          classes.content,
          { [classes.contentPadding]: paneState },
          classes[device]
        )}
      >
        {children}
      </div>
    </div>
  );
};
