import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray, getBarChartStyling } from "../Helpers/Helpers";
import { bubbleSort } from "../Algos/bubbleSort";

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
}

interface Props {
  values: Values;
}

const BarChart: React.FC<Props> = ({ values }) => {
  const [array, setArray] = useState<number[]>(() =>
    generateArray(values.arrLength)
  );
  const [isSorted, setSorted] = useState<boolean>(false);

  if (values.arrLength !== array.length)
    setArray(generateArray(values.arrLength));

  const { margin, width, fontSize, fontWeight, calcHeight } = getBarChartStyling(values.arrLength);

  console.log(`values.delay`, values.delay);

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
