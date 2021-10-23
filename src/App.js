import React from "react";
import { getDaysInYear, getDayOfYear } from "date-fns";

const getYearPercentage = (partialValue, totalValue) => {
  return Math.round((100 * partialValue) / totalValue);
};

const App = () => {
  const today = new Date();
  const daysInYear = getDaysInYear(today);
  const curretDayOfYear = getDayOfYear(today);

  return <div>App</div>;
};

export default App;
