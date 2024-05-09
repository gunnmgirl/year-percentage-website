import React from "react";
import { Box, Flex, Switch, useColorMode } from "@chakra-ui/react";

import { ReactComponent as Sun } from "./theme.svg";
import { ReactComponent as Moon } from "./moon.svg";

const Theme = (props: { colorScheme: string }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { colorScheme } = props;

  const handleToggleTheme = () => {
    toggleColorMode();
  };

  return (
    <Flex alignSelf="flex-end" mt="8px">
      <Box height="28px" width="50px">
        <Switch
          as={Box}
          position="absolute"
          size="lg"
          isChecked={colorMode === "dark"}
          onChange={handleToggleTheme}
          colorScheme={colorScheme}
        >
          <Box
            top={"-21.5px"}
            left={colorMode === "dark" ? "30px" : "8px"}
            width="min-content"
            position="relative"
            fill="gray.900"
          >
            {colorMode === "dark" ? <Moon /> : <Sun />}
          </Box>
        </Switch>
      </Box>
    </Flex>
  );
};

export default Theme;
