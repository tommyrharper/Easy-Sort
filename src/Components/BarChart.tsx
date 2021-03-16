import React, { useState } from "react";
import "./BarChart.scss";
import { Box, Button } from "@chakra-ui/react";
import { generateArray, getBarChartStyling } from "../Helpers/Helpers";
import { bubbleSort } from "../Algos/bubbleSort";
import { useForm } from '../Hooks/useForm';

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
  isSorted: boolean;
}

interface Props {
  values: Values;
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  barStyle: any;
  // isSorted: boolean;
  // setSorted: React.Dispatch<React.SetStateAction<boolean>>;
}

const BarChart: React.FC<Props> = ({
  values,
  array,
  setArray,
  barStyle,
  // isSorted,
  // setSorted,
}) => {
  const { arrLength, isSorted } = values;

  const {
    margin,
    width,
    fontSize,
    fontWeight,
    calcHeight,
  } = barStyle;

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
        name="isSorted"
        isDisabled={isSorted}
        margin="40px"
        // onClick={(e) => {
        //   console.log(`e`, e);
        //   (() => useForm(e))()
        //   // setArray(array.sort((a, b) => a - b));
        //   // bubbleSort(array, values.delay, calcHeight);
        //   // setSorted(true);

        //   // if (isSorted) return;
        //   // if (!isSorted) bubbleSort(array, values.delay, calcHeight);
        //   // else {
        //   //   setArray(array.sort((a, b) => a - b));
        //   //   bubbleSort(array, values.delay, calcHeight);
        //   // }
        //   // setSorted(true);
        // }}
      >
        Sort
      </Button>
      <Button
        margin="40px"
        onClick={() => {
          // setArray(generateArray(arrLength));
          // setSorted(false);
        }}
      >
        Shuffle
      </Button>
    </div>
  );
};

export default BarChart;
