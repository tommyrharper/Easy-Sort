import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray } from "../Helpers/Helpers";
import { bubbleSort } from '../Algos/bubbleSort';

const ARR_LENGTH = 10;
const DELAY = 300;
const HEIGHT_MULTI = 50
const calcHeight = (h: number) => h * HEIGHT_MULTI;
interface Props {
  algo: string;
}

const BarChart: React.FC<Props> = () => {
  const [array, setArray] = useState<number[]>(() => generateArray(ARR_LENGTH));
  const [isSorted, setSorted] = useState<boolean>(false);
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
      {/* <Button margin="40px" onClick={() => setArray(a => bubbleSort(a))}> */}
      <Button
        margin="40px"
        onClick={() => {
          if (!isSorted) bubbleSort(array, DELAY, calcHeight);
          else {
            setArray(array.sort((a, b) => a - b));
            bubbleSort(array, DELAY, calcHeight);
          }
          setSorted(true);
        }}
      >
        Sort
      </Button>
      <Button
        margin="40px"
        onClick={() => {
          setArray(generateArray(ARR_LENGTH));
          setSorted(false);
        }}
      >
        Shuffle
      </Button>
    </div>
  );
};

export default BarChart;
