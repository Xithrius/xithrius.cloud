import {
  SiGitea,
  SiGithub,
  SiTwitch,
  SiYoutube,
  SiTwitter,
} from "react-icons/si";
import styles from "../../styles/Footer.module.css";

const Footer = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <a href="https://github.com/Xithrius" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        <a href="https://git.xithrius.cloud/" target="_blank" rel="noreferrer">
          <SiGitea />
        </a>
        <a href="https://twitch.tv/Xithrius" target="_blank" rel="noreferrer">
          <SiTwitch />
        </a>
        <a
          href="https://www.youtube.com/channel/UCD97h_kt9b3dhHPaDpsHevA"
          target="_blank"
          rel="noreferrer"
        >
          <SiYoutube />
        </a>
        <a href="https://twitter.com/Xithrius" target="_blank" rel="noreferrer">
          <SiTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
