import React, { useState } from "react";
import "./App.scss";
import { useForm } from "./Hooks/useForm";
import { Box, Heading, Select } from "@chakra-ui/react";
import BarChart from "./Components/BarChart";
import Controls from "./Components/Controls";

const ARR_LENGTH = 10;
const DELAY = 300;
const HEIGHT_MULTI = 50


export const App: React.FC = () => {
  const [values, handleChange] = useForm({
    algo: "Bubble Sort",
    delay: DELAY,
    arrLength: ARR_LENGTH,
  });

  return (
    <Box className="appContainer" fontSize="xl">
      <Heading className="heading" size="2xl" color="teal.300">
        Easy-Sort
      </Heading>
      <Box marginBottom="20px" display="flex">
        <BarChart algo={values.algo}/>
        <Controls 
          values={values}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};
