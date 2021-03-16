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
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
}

const BarChart: React.FC<Props> = ({ values, array, setArray }) => {
  const [isSorted, setSorted] = useState<boolean>(false);

  if (values.arrLength !== array.length)
    setArray(generateArray(values.arrLength));

  const {
    margin,
    width,
    fontSize,
    fontWeight,
    calcHeight,
  } = getBarChartStyling(values.arrLength);

  return (
    <div>
      <div className="barsContainer">
        {array.map((x, i) => {
          let padding = 10;
          const height = calcHeight(x);
          if (padding >= height / 10) {
            padding = 0;
          }
          return (
            <Box
              paddingTop={`${padding}px`}
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
          );
        })}
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
