import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box display={{ md: "flex" }} align="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Xithrius
          </Heading>
          <p>Rustacean, Pythonista, Triager</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
