import React, { useState } from "react";
import "./BarChart.scss";
import { Box } from "@chakra-ui/react";

const ARR_LENGTH = 5;

const generateArray = (length: number): number[] => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * length) + 1);
  }
  return arr;
};

const BarChart: React.FC = () => {
  const [array, setArray] = useState<number[]>(() => generateArray(ARR_LENGTH));

  return (
    <div className="barsContainer">
      {console.log(`array`, array)}
      {array.map((x, i) => {
        console.log(`x`, x);
        const height = x * 50;
        console.log(`height`, height);
        return (
          <Box
            className="bar"
            height={`${height}px`}
            borderRadius="lg"
            backgroundColor="teal.300"
          >
            {x}
          </Box>
        );
      })}
    </div>
  );
};

export default BarChart;
