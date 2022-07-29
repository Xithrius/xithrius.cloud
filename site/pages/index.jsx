import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>xithrius.cloud</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Xithrius</h1>
          <p className={styles.description}>Rustacean, Pythonista, Triager.</p>
          <div className={styles.menu}>
            <a
              href="https://projects.xithrius.cloud"
              target="_blank"
              rel="noreferrer"
            >
              Projects
            </a>
            <a
              href="https://guides.xithrius.cloud"
              target="_blank"
              rel="noreferrer"
            >
              Guides
            </a>
            <a
              href="https://todo.xithrius.cloud"
              target="_blank"
              rel="noreferrer"
            >
              ToDo
            </a>
            <a
              href="https://dots.xithrius.cloud"
              target="_blank"
              rel="noreferrer"
            >
              Dotfiles
            </a>
            <a
              href="https://gpg.xithrius.cloud"
              target="_blank"
              rel="noreferrer"
            >
              GPG
            </a>
            <a
              href="https://templates.xithrius.cloud"
              target="_blank"
              rel="noreferrer"
            >
              Templates
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
