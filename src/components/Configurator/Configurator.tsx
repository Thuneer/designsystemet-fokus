import classes from "./Configurator.module.css";
import cn from "classnames";
import { useContext, useEffect, useState } from "react";

import {
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
import { ConfigurationContext } from "@/contexts/ConfigurationContext";

export const Configurator = () => {
  const { configuration, setConfiguration } = useContext(ConfigurationContext);

  useEffect(() => {
    document.body.classList.add("theme-digdir");
  }, [configuration.theme]);

  const setColorTheme = (theme: string) => {
    setConfiguration({ ...configuration, colorTheme: theme });
    document.body.classList.remove("theme-digdir");
    document.body.classList.remove("theme-tilsynet");
    document.body.classList.remove("theme-altinn");
    document.body.classList.add("theme-" + theme);
  };

  const setTheme = (e: any) => {
    setConfiguration({
      ...configuration,
      theme: e.target.checked ? "darkmode" : "lightmode",
    });
    document.body.classList.remove("lightmode");
    document.body.classList.remove("darkmode");
    document.body.classList.add(e.target.checked ? "darkmode" : "lightmode");
  };

  const setDevice = (device: string) => {
    setConfiguration({ ...configuration, device: device });
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
      label: "Transparent",
    },
    {
      value: 100,
      label: "Gul",
    },
  ];

  return (
    <div className={classes.configurator}>
      <button
        className={classes.toggle}
        onClick={() =>
          setConfiguration({
            ...configuration,
            paneState: !configuration.paneState,
          })
        }
      >
        {!configuration.paneState && (
          <CogIcon title="a11y-title" fontSize="1.5rem" />
        )}
        {configuration.paneState && (
          <XMarkIcon title="a11y-title" fontSize="1.5rem" />
        )}
      </button>

      <div className={cn(classes.pane)}>
        <NextLink href="/" className={classes.back}>
          <ChevronLeftIcon title="a11y-title" fontSize="1.5rem" /> Alle demoer
        </NextLink>
        <Heading size="xsmall">Innstillinger</Heading>

        <div className={classes.label}>Enhet</div>
        <div className={classes.device}>
          <button
            className={cn(classes.deviceBtn, {
              [classes.activeDevice]: configuration.device === "desktop",
            })}
            onClick={() => setDevice("desktop")}
          >
            <MonitorIcon title="a11y-title" fontSize="1.5rem" />
          </button>
          <button
            className={cn(classes.deviceBtn, {
              [classes.activeDevice]: configuration.device === "tablet",
            })}
            onClick={() => setDevice("tablet")}
          >
            <TabletIcon title="a11y-title" fontSize="1.5rem" />
          </button>
          <button
            className={cn(classes.deviceBtn, {
              [classes.activeDevice]: configuration.device === "mobile",
            })}
            onClick={() => setDevice("mobile")}
          >
            <MobileSmallIcon title="a11y-title" fontSize="1.5rem" />
          </button>
        </div>

        <div className={classes.label}>Fokus typer</div>

        <div className={classes.sliderContainer}>
          <Slider
            aria-label="Custom marks"
            defaultValue={0}
            step={50}
            valueLabelDisplay="auto"
            marks={marks2}
          />
        </div>

        <div className={classes.label}>Fargetema</div>

        <div className={classes.colorsContainer}>
          <div
            onClick={() => setColorTheme("digdir")}
            className={cn(classes.colors, classes.theme1, {
              [classes.colorsActive]: configuration.colorTheme === "digdir",
            })}
          >
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
          </div>

          <div
            onClick={() => setColorTheme("tilsynet")}
            className={cn(classes.colors, classes.theme2, {
              [classes.colorsActive]: configuration.colorTheme === "tilsynet",
            })}
          >
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
          </div>

          <div
            onClick={() => setColorTheme("altinn")}
            className={cn(classes.colors, classes.theme3, {
              [classes.colorsActive]: configuration.colorTheme === "altinn",
            })}
          >
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
            <div className={classes.color}></div>
          </div>
        </div>

        <div className={classes.label}>Darkmode</div>

        <Switch position="left" size="small" onChange={(e) => setTheme(e)}>
          Skru på darkmode
        </Switch>
      </div>
    </div>
  );
};
