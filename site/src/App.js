import "./App.css";
import { Container, Box, Heading, Stack } from "@chakra-ui/react";

function App() {
  return (
    <Container>
      <Box display={{ md: "flex" }} align="center">
        <Box flexGrow={1}>
          <Stack spacing={5}>
            <Heading as="h1" className="homepage-header">
              Xithrius
            </Heading>
            <Heading>Rustacean, Pythonista, Triager.</Heading>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
