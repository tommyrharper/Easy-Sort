import React, { useState, useEffect } from "react";
import "./App.scss";
import { useForm } from "./Hooks/useForm";
import { Box, Heading, useToken } from "@chakra-ui/react";
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
    isSorted: false,
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

  const teal = useToken("colors", "teal.300");

  return (
    <Box className="appContainer" fontSize="xl">
      <Heading className="heading" size="2xl" margin="20px" color={teal}>
        Easy-Sort
      </Heading>
      <Box display="flex">
        <BarChart array={array} barStyle={barStyle} color={teal} />
        <Box margin="40px">
          <Controls
            values={values}
            handleChange={handleChange}
            setArray={setArray}
            array={array}
            barStyle={barStyle}
            color={teal}
          />
        </Box>
      </Box>
    </Box>
  );
};
