import Head from "next/head";
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

        <div className={styles.menu}>
          <a href="https://guides.xithrius.cloud" target="_blank">
            Guides
          </a>
          <a href="https://todo.xithrius.cloud" target="_blank">
            ToDo
          </a>
          <a href="https://github.com/Xithrius" target="_blank">
            GitHub
          </a>
          <a href="https://twitch.tv/Xithrius" target="_blank">
            Twitch
          </a>
          <a href="https://www.youtube.com/channel/UCD97h_kt9b3dhHPaDpsHevA">
            YouTube
          </a>
        </div>
      </main>
    </div>
  );
}
