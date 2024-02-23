/* eslint-disable @next/next/no-img-element */
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import {
  HouseIcon,
  ChevronDownIcon,
  NewspaperIcon,
  PersonIcon,
} from "@navikt/aksel-icons";
import NextLink from "next/link";
import classes from "./Sidebar.module.css";

const CustomToggle = ({
  children,
  eventKey,
}: {
  children: any;
  eventKey: any;
}) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button onClick={decoratedOnClick} className={classes.toggle}>
      {children}
    </button>
  );
};

export const Sidebar = () => {
  return (
    <div>
      <div className={classes.header}>
        <img src="img/logo.svg" alt="Logo" />
      </div>
      <div className={classes.body}>
        <Accordion defaultActiveKey="0">
          <div>
            <NextLink href="/dashboard" className={classes.link}>
              <HouseIcon
                title="a11y-title"
                fontSize="1.5rem"
                className={classes.startIcon}
              />
              <span className={classes.toggleText}>Dashboard</span>
            </NextLink>
          </div>
          <div>
            <CustomToggle eventKey="1">
              <PersonIcon
                title="a11y-title"
                fontSize="1.5rem"
                className={classes.startIcon}
              />
              <span className={classes.toggleText}>Brukere</span>
              <ChevronDownIcon
                title="a11y-title"
                fontSize="1.5rem"
                className={classes.endIcon}
              />
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
              <ul>
                <li>
                  <NextLink href="/dashboard">
                    <HouseIcon
                      title="a11y-title"
                      fontSize="1.5rem"
                      className={classes.startIcon}
                    />
                    Oversikt
                  </NextLink>
                </li>
              </ul>
            </Accordion.Collapse>
          </div>
          <div>
            <CustomToggle eventKey="2">
              <NewspaperIcon
                title="a11y-title"
                fontSize="1.5rem"
                className={classes.startIcon}
              />
              <span className={classes.toggleText}>Artikler</span>
              <ChevronDownIcon
                title="a11y-title"
                fontSize="1.5rem"
                className={classes.endIcon}
              />
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
              <ul>
                <li>
                  <NextLink href="/dashboard">
                    <HouseIcon title="a11y-title" fontSize="1.5rem" />
                    Oversikt
                  </NextLink>
                </li>
              </ul>
            </Accordion.Collapse>
          </div>
          <div>
            <NextLink href="/dashboard" className={classes.link}>
              <HouseIcon
                title="a11y-title"
                fontSize="1.5rem"
                className={classes.startIcon}
              />

              <span className={classes.toggleText}>Innstillinger</span>
            </NextLink>
          </div>
        </Accordion>
      </div>
    </div>
  );
};
