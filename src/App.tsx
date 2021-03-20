import React, { useState, useEffect } from "react";
import "./App.scss";
import { useForm } from "./Hooks/useForm";
import { Box, Heading, useToken } from "@chakra-ui/react";
import BarChart from "./Components/BarChart";
import Controls from "./Components/Controls";
import { DEFAULT_ARR_LENGTH, DEFAULT_DELAY } from "./Helpers/Config";
import { generateArray, getBarChartStyling } from "./Helpers/Helpers";
import { BarStyle } from './Helpers/Interfaces';

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

  const { arrLength, algo } = values;

  const [barStyle, setBarStyle] = useState<BarStyle>(() =>
    getBarChartStyling(arrLength)
  );

  useEffect(() => {
    setArray(generateArray(arrLength));
    setBarStyle(getBarChartStyling(arrLength));
  }, [arrLength]);

  const teal = useToken("colors", "teal.300");

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setBarStyle(getBarChartStyling(arrLength));
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className="appContainer" fontSize="xl">
      <Heading className="heading" size="2xl" margin="20px" color={teal}>
        {algo}
      </Heading>
      <Box className="centralContainer">
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
