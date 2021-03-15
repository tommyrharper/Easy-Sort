import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray } from '../Helpers/Helpers';

const ARR_LENGTH = 5;

const bubbleSort = (array: number[]): number[] => {
  const arr = [...array];
  let changeMade = true;
  while (changeMade) {
    changeMade = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const bar1 = arr[i];
      const bar2 = arr[i + 1];
      if (bar1 > bar2) {
        arr[i] = bar2;
        arr[i + 1] = bar1;
        changeMade = true;
      }
    }
  }
  return arr;
};

const test = (setArray: any) => {
  setArray((a: number[]) => bubbleSort(a));
};

const BarChart: React.FC = () => {
  const [array, setArray] = useState<number[]>(() => generateArray(ARR_LENGTH));
  return (
    <div>
      <div className="barsContainer">
        {console.log(`array`, array)}
        {array.map((x, i) => (
          <Box
            key={`${x}${i}`}
            className="bar"
            height={`${x * 50}px`}
            borderRadius="lg"
            backgroundColor="teal.300"
          >
            {x}
          </Box>
        ))}
      </div>
      {/* <Button marginTop="40px" onClick={() => setArray(a => bubbleSort(a))}> */}
      <Button marginTop="40px" onClick={() => test(setArray)}>
        Sort
      </Button>
    </div>
  );
};

export default BarChart;
