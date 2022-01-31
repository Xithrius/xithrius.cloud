import { useState } from "react";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import Switch from "../switch/Switch";
import "./Home.css";

export function Home () {
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
            </Box>
        </Container>
    );
}