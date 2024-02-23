/* eslint-disable @next/next/no-img-element */
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { HouseIcon } from "@navikt/aksel-icons";
import NextLink from "next/link";

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
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
};

export const Sidebar = () => {
  return (
    <div>
      <div>
        <img src="img/logo.svg" alt="Logo" />
      </div>
      <div>
        <Accordion defaultActiveKey="0">
          <div>
            <NextLink href="/dashboard">
              <HouseIcon title="a11y-title" fontSize="1.5rem" />
              Dashboard
            </NextLink>
          </div>
          <div>
            <CustomToggle eventKey="1">
              <HouseIcon title="a11y-title" fontSize="1.5rem" /> Brukere
            </CustomToggle>
            <Accordion.Collapse eventKey="1">
              <div>test</div>
            </Accordion.Collapse>
          </div>
          <div>
            <NextLink href="/dashboard">
              <HouseIcon title="a11y-title" fontSize="1.5rem" />
              Innstillinger
            </NextLink>
          </div>
        </Accordion>
      </div>
    </div>
  );
};
