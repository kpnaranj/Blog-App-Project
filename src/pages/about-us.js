import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us - Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>This is the About us Page</p>
    </div>
  );
}
