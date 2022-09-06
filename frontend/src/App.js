import { Home } from "./Components/Home";
import { Flex } from "@chakra-ui/react";
import { Unauthorized } from "./Components/Unauthorized";
import { Bad } from "./Components/BadRequest";
import { Server } from "./Components/Server Error";
function App() {
  return (
    <Flex align="center" justify="center" gap="10" mt="10%">
      <Home />
      <Unauthorized />
      <Bad />
      <Server />
    </Flex>
  );
}

export default App;
