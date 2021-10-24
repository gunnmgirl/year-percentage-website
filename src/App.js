import React from "react";
import { getDaysInYear, getDayOfYear, getYear, getQuarter } from "date-fns";
import { Flex, Box, Text, Progress } from "@chakra-ui/react";
import Theme from "./theme";

const today = new Date();

const getYearPercentage = () => {
  const daysInYear = getDaysInYear(today);
  const curretDayOfYear = getDayOfYear(today);
  return Math.round((100 * curretDayOfYear) / daysInYear);
};

const getProgressColor = () => {
  const yearQuarter = getQuarter(today);
  switch (yearQuarter) {
    case 1:
      return "green";
    case 2:
      return "yellow";
    case 3:
      return "orange";
    case 4:
      return "red";
    default:
      return "blue";
  }
};

const App = () => {
  const yearPercentage = getYearPercentage();
  const currentYear = getYear(today);
  const colorScheme = getProgressColor();

  return (
    <Flex minHeight="100vh" justify="center">
      <Flex
        direction="column"
        minHeight="100vh"
        justify="space-evenly"
        align="center"
      >
        <Theme colorScheme={colorScheme} />
        <Box textAlign="center">
          <Text fontStyle="oblique" fontSize="lg" mb="8px">
            "The two most powerful warriors are patience and time."
          </Text>
          <Text fontSize="md" mb="42px">
            Leo Tolstoy, War and Peace
          </Text>
          <Progress
            colorScheme={colorScheme}
            value={yearPercentage}
            hasStripe
            isAnimated
            max={100}
          />
          <Text
            mt="8px"
            fontSize="sm"
            fontWeight="bold"
          >{`${yearPercentage}% of ${currentYear}.`}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default App;
