import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray } from "../Helpers/Helpers";
import { bubbleSort } from '../Algos/bubbleSort';

const HEIGHT_MULTI = 50
const calcHeight = (h: number) => h * HEIGHT_MULTI;

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

  return (
    <div>
      <div className="barsContainer">
        {array.map((x, i) => (
          <Box
            key={`${x}${i}`}
            className="bar"
            height={`${calcHeight(x)}px`}
            borderRadius="lg"
            backgroundColor="teal.300"
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
