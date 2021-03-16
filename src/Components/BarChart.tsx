import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray } from "../Helpers/Helpers";
import { bubbleSort } from '../Algos/bubbleSort';

// const HEIGHT_MULTI = 50
// const calcHeight = (h: number) => h * HEIGHT_MULTI;

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
}

interface Props {
  values: Values;
}

const BarChart: React.FC<Props> = ({ values }) => {
  const [array, setArray] = useState<number[]>(() => generateArray(values.arrLength));
  const [isSorted, setSorted] = useState<boolean>(false);
  
  if (values.arrLength !== array.length) setArray(generateArray(values.arrLength));

  const margin = 180 / ((values.arrLength - 1) * 2);
  const width = 500 / values.arrLength;
  let fontSize = 20;
  let fontWeight = 'bold'
  console.log(`width`, width);
  if (width < 26) {
    fontSize = width - 5;
    fontWeight = 'normal'
    if (fontSize < 1) fontSize = 0;
  }

  const HEIGHT_MULTI = 500 / values.arrLength;
  const calcHeight = (h: number) => h * HEIGHT_MULTI;

  return (
    <div>
      <div className="barsContainer">
        {array.map((x, i) => (
          <Box
            key={`a${x}b${i}c${margin}d${width}`}
            className="bar"
            height={`${calcHeight(x)}px`}
            width={`${width}px`}
            margin={`${margin}px`}
            borderRadius="lg"
            backgroundColor="teal.300"
            fontWeight={fontWeight}
            fontSize={`${fontSize}px`}
          >
            {x}
          </Box>
        ))}
      </div>
      <Button
        margin="40px"
        onClick={() => {
          if (!isSorted) bubbleSort(array, values.delay, calcHeight);
          else {
            setArray(array.sort((a, b) => a - b));
            bubbleSort(array, values.delay, calcHeight);
          }
          setSorted(true);
        }}
      >
        Sort
      </Button>
      <Button
        margin="40px"
        onClick={() => {
          setArray(generateArray(values.arrLength));
          setSorted(false);
        }}
      >
        Shuffle
      </Button>
    </div>
  );
};

export default BarChart;
