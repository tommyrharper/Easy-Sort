import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray } from "../Helpers/Helpers";
import { bubbleSort } from "../Algos/bubbleSort";

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
  isSorted: boolean;
  isSorting: boolean;
}

interface Props {
  values: Values;
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  barStyle: any;
  handleChange: any;
}

const BarChart: React.FC<Props> = ({
  values,
  array,
  setArray,
  barStyle,
  handleChange,
}) => {
  const { arrLength, isSorting } = values;

  const { margin, width, fontSize, fontWeight, calcHeight } = barStyle;
  console.log(`isSorting`, isSorting);
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
        name="isSorting"
        isDisabled={isSorting}
        margin="40px"
        onClick={(e) => {
          handleChange(e, true);
          bubbleSort(array, values.delay, calcHeight, setArray, handleChange, e);
        }}
      >
        Sort
      </Button>
      <Button
        isDisabled={isSorting}
        margin="40px"
        onClick={() => {
          setArray(generateArray(arrLength));
        }}
      >
        Shuffle
      </Button>
    </div>
  );
};

export default BarChart;
