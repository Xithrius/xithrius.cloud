import Switch from "./components/Switch";
import "./App.css";
import { Container, Box, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Container>
      <Box display={{ md: "flex" }} align="right">
        <Box flexGrow={1}>
          <Switch onToggle={() => themeToggler()} />
        </Box>
      </Box>
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
        </Box>
      </Box>
    </Container>
  );
}

export default App;
