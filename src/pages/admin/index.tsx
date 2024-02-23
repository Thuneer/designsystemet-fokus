/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Bar } from "@/components/Bar/Bar";
import classes from "./Dashboard.module.css";
import {
  Heading,
  Ingress,
  Link,
  Card,
  Paragraph,
} from "@digdir/design-system-react";
import { Sidebar } from "@/components/sidebar/Sidebar";

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
        <Bar />
        <div className={classes.page}>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
          <div className={classes.main}>
            <div className={classes.left}>left</div>
            <div className={classes.right}>right</div>
          </div>
        </div>
      </main>
    </>
  );
}