import Head from "next/head";
import { SiGithub, SiTwitch, SiYoutube, SiGitea } from "react-icons/si";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>xithrius.cloud</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Xithrius</h1>

        <p className={styles.description}>Rustacean, Pythonista, Triager.</p>

        <div className={styles.icons}>
          <a href="https://github.com/Xithrius">
            <SiGithub />
          </a>
          <a href="https://git.xithrius.cloud/">
            <SiGitea />
          </a>
          <a href="https://twitch.tv/Xithrius">
            <SiTwitch />
          </a>
          <a href="https://www.youtube.com/channel/UCD97h_kt9b3dhHPaDpsHevA">
            <SiYoutube />
          </a>
        </div>
      </main>
    </div>
  );
}
