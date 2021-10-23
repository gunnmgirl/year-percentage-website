import React from "react";
import { getDaysInYear, getDayOfYear, getYear } from "date-fns";
import { Flex, Box, Text, Progress } from "@chakra-ui/react";

const getYearPercentage = (partialValue, totalValue) => {
  return Math.round((100 * partialValue) / totalValue);
};

const App = () => {
  const today = new Date();
  const daysInYear = getDaysInYear(today);
  const curretDayOfYear = getDayOfYear(today);
  const yearPercentage = getYearPercentage(curretDayOfYear, daysInYear);
  const currentYear = getYear(today);

  return (
    <Flex minHeight="100vh" justify="center" align="center">
      <Box textAlign="center">
        <Text color="gray.900" fontStyle="oblique" fontSize="lg" mb="8px">
          "The two most powerful warriors are patience and time."
        </Text>
        <Text fontSize="md" mb="42px">
          Leo Tolstoy, War and Peace
        </Text>
        <Progress
          colorScheme="blue"
          value={yearPercentage}
          hasStripe
          isAnimated
          maxValue={100}
        />
        <Text
          mt="8px"
          fontSize="sm"
          fontWeight="bold"
        >{`${yearPercentage}% of ${currentYear}.`}</Text>
      </Box>
    </Flex>
  );
};

export default App;
