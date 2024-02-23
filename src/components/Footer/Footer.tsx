import { Col, Row, Container } from "react-bootstrap";
import classes from "./Footer.module.css";
import { Heading, Link } from "@digdir/design-system-react";

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
              <Link href="#" inverted>
                Digitaliseringsdirektoratet
              </Link>
              <Link href="#" inverted>
                Digitaliseringsbloggen
              </Link>
              <Link href="#" inverted>
                For presse
              </Link>
              <Link href="#" inverted>
                PErsonvern
              </Link>
            </div>
          </Col>
          <Col>
            <Heading size="xsmall" className={classes.heading}>
              Kontakt oss
            </Heading>
            <div className={classes.links}>
              <Link href="#" inverted>
                Send oss en e-post
              </Link>
              <Link href="#" inverted>
                Ring oss her
              </Link>
              <Link href="#" inverted>
                Kontaktskjema
              </Link>
              <Link href="#" inverted>
                RSS
              </Link>
            </div>
          </Col>
          <Col>
            <Heading size="xsmall" className={classes.heading}>
              Om nettstedet
            </Heading>
            <div className={classes.links}>
              <Link href="#" inverted>
                Personvernerklæring
              </Link>
              <Link href="#" inverted>
                Tilgjengelighetserklæring
              </Link>
              <Link href="#" inverted>
                Informasjonskapsler
              </Link>
              <Link href="#" inverted>
                Nyhetsarkiv
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
