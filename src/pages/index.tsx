/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Bar } from "@/components/Bar/Bar";
import classes from "./Home.module.css";
import {
  Heading,
  Ingress,
  Link,
  Card,
  Paragraph,
} from "@digdir/design-system-react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import NextLink from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Designsystemet - Fokus demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={classes.page}>
          <div className={classes.header}>
            <img src="img/ds-logo.svg" alt="" />
            <Heading size="large">Demo applikasjoner</Heading>
          </div>
          <div className={classes.cards}>
            <Container>
              <Row className="gx-5">
                <Col>
                  <NextLink href="/website" className={classes.card}>
                    <img src="img/website.png" alt="" className={classes.img} />
                    <div className={classes.cardContent}>
                      <Heading size="small">Tradisjonell nettside</Heading>
                    </div>
                  </NextLink>
                </Col>
                <Col>
                  <NextLink href="/admin" className={classes.card}>
                    <img src="img/admin.png" alt="" className={classes.img} />
                    <div className={classes.cardContent}>
                      <Heading size="small">Admin grensesnitt</Heading>
                    </div>
                  </NextLink>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
    </>
  );
}
