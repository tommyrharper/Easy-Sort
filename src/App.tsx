import React, { useState, useEffect } from "react";
import "./App.scss";
import { useForm } from "./Hooks/useForm";
import { Box, Heading } from "@chakra-ui/react";
import BarChart from "./Components/BarChart";
import Controls from "./Components/Controls";
import { DEFAULT_ARR_LENGTH, DEFAULT_DELAY } from "./Helpers/Config";
import { generateArray, getBarChartStyling } from "./Helpers/Helpers";

export const App: React.FC = () => {
  const [values, handleChange] = useForm({
    algo: "Bubble Sort",
    delay: DEFAULT_DELAY,
    arrLength: DEFAULT_ARR_LENGTH,
    isSorting: false,
  });
  const [array, setArray] = useState<number[]>(() =>
    generateArray(values.arrLength)
  );

  const { arrLength } = values;

  const [barStyle, setBarStyle] = useState<any>(() =>
    getBarChartStyling(arrLength)
  );

  useEffect(() => {
    setArray(generateArray(arrLength));
    setBarStyle(getBarChartStyling(arrLength));
  }, [arrLength]);

  return (
    <Box className="appContainer" fontSize="xl">
      <Heading className="heading" size="2xl" color="teal.300">
        Easy-Sort
      </Heading>
      <Box marginBottom="20px" display="flex">
        <BarChart array={array} barStyle={barStyle} />
        <Controls
          values={values}
          handleChange={handleChange}
          setArray={setArray}
          array={array}
          barStyle={barStyle}
        />
      </Box>
    </Box>
  );
};
