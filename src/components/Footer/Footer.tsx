import { Col, Row, Container } from "react-bootstrap";
import classes from "./Footer.module.css";
import { Heading, Link } from "@digdir/design-system-react";
import utilClasses from "../../styles/utlilty.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col>
            <Heading size="xsmall" className={classes.heading}>
              Om oss
            </Heading>
            <div className={classes.links}>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Digitaliseringsdirektoratet
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Digitaliseringsbloggen
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                For presse
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Personvern
              </Link>
            </div>
          </Col>
          <Col>
            <Heading size="xsmall" className={classes.heading}>
              Kontakt oss
            </Heading>
            <div className={classes.links}>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Send oss en e-post
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Ring oss her
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Kontaktskjema
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                RSS
              </Link>
            </div>
          </Col>
          <Col>
            <Heading size="xsmall" className={classes.heading}>
              Om nettstedet
            </Heading>
            <div className={classes.links}>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Personvernerklæring
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Tilgjengelighetserklæring
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Informasjonskapsler
              </Link>
              <Link href="#" inverted className={utilClasses.tabFocus}>
                Nyhetsarkiv
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
