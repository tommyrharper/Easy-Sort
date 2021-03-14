import React from 'react';
import './App.scss';

import {
  Box,
  Heading,
} from "@chakra-ui/react"
import BarChart from './Components/BarChart';

export const App: React.FC = () => {
  return (
    <Box className="appContainer" fontSize="xl">
      <Heading className="heading" size="2xl" color="teal.300">Easy-Sort</Heading>
      <BarChart/>
    </Box>
  );
}

