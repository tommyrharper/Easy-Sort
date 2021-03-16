import React, { useState } from "react";
import "./App.scss";
import { useForm } from "./Hooks/useForm";

import { Box, Heading, Select } from "@chakra-ui/react";
import BarChart from "./Components/BarChart";

export const App: React.FC = () => {
  const [values, handleChange] = useForm({
    algo: "Bubble Sort",
  });

  return (
    <Box className="appContainer" fontSize="xl">
      <Heading className="heading" size="2xl" color="teal.300">
        Easy-Sort
      </Heading>
      <Box marginBottom="20px">
        <Select value={values.algo} onChange={handleChange} name="algo">
          <option value="Bubble Sort">Bubble Sort</option>
          <option value="Insertion Sort">Insertion Sort</option>
          <option value="Selection Sort">Selection Sort</option>
        </Select>
      </Box>
      <BarChart />
    </Box>
  );
};
