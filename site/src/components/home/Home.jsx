import { useState } from "react";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { SiGithub, SiGitea, SiTwitch, SiYoutube } from "react-icons/si";
import { IconContext } from "react-icons";
import Switch from "../switch/Switch";
import "./Home.css";

const iconStyle = { margin: "4px" };

export function Home() {
  const [theme, setTheme] = useState("dark-mode");

  const themeToggler = () => {
    theme === "dark-mode" ? setTheme("light-mode") : setTheme("dark-mode");
  };

  return (
    <Container className={theme}>
      <Box display={{ md: "flex" }} align="center">
        <Box flexGrow={1}>
          <Stack spacing={5}>
            <Heading as="h1" className="homepage-header">
              Xithrius
            </Heading>
            <Heading as="h2" className="homepage-header-description">
              Rustacean, Pythonista, Triager.
            </Heading>
          </Stack>
          <Switch onToggle={() => themeToggler()} />
        </Box>
        <IconContext.Provider
          value={{ className: "shared-class", size: 40, style: iconStyle }}
        >
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
        </IconContext.Provider>
      </Box>
    </Container>
  );
}
