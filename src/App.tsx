import React from 'react';
import './App.scss';

import {
  Box,
  Heading,
} from "@chakra-ui/react"
import BarChart from './Components/BarChart';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Box textAlign="center" fontSize="xl">
        <Heading padding="20px">Easy-Sort</Heading>
        <BarChart/>
      </Box>
    </div>
  );
}

