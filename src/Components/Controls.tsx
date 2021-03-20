import React, { useState } from "react";
import {
  Select,
  FormLabel,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
} from "@chakra-ui/react";
import { calcSpeed } from "../Helpers/Helpers";
import {
  MIN_ARRLENGTH,
  MAX_ARRLENGTH,
  MAX_SPEED,
  MIN_SPEED,
} from "../Helpers/Config";
import "./Controls.scss";
import { executeAnimation } from "../Algos/algos";
import { generateArray } from "../Helpers/Helpers";
import { AlgoInformation } from "../Algos/AlgoInformation";
import { BarStyle } from '../Helpers/Interfaces';

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
  isSorting: boolean;
  isSorted: boolean;
}

interface Props {
  values: Values;
  handleChange: (e: any, opt?: any) => void,
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  array: number[];
  barStyle: BarStyle;
  color: string;
}

const Controls: React.FC<Props> = ({
  values,
  handleChange,
  setArray,
  array,
  barStyle,
  color,
}) => {
  const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);
  const { isSorting, algo, arrLength, delay, isSorted } = values;
  const { calcHeight } = barStyle;
  const speed = calcSpeed(delay);

  const stop = () => {
    for (let i = 0; i < timeouts.length; i++) clearTimeout(timeouts[i]);
    const arrayBars = document.getElementsByClassName(
      "bar"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let j = 0; j < arrayBars.length; j++)
      arrayBars[j].style.backgroundColor = color;
    setArray(generateArray(arrLength));
    handleChange(
      {
        isSorting: false,
        isSorted: true,
      },
      "passObject"
    );
  };

  const sort = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    handleChange(e, true);
    setTimeouts(
      executeAnimation(
        array,
        delay,
        calcHeight,
        setArray,
        handleChange,
        color,
        algo,
        setTimeouts
      )
    );
  };

  const shuffle = () => {
    setArray(generateArray(arrLength));
    handleChange("isSorted", false);
  };

  return (
    <Box marginLeft="20px">
      <FormLabel>Select Sorting Algorithm:</FormLabel>
      <Select
        isDisabled={isSorting}
        value={algo}
        onChange={(e) => {
          if (isSorted) {
            setArray(generateArray(arrLength));
            handleChange(
              {
                [e.target.name]: e.target.value,
                isSorted: false,
              },
              "passObject"
            );
          } else handleChange(e);
        }}
        name="algo"
        marginBottom="20px"
      >
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Quick Sort">Quick Sort</option>
      </Select>
      <FormLabel>Select Speed:</FormLabel>
      <Slider
        isDisabled={isSorting}
        min={MIN_SPEED}
        max={MAX_SPEED}
        defaultValue={speed}
        onChange={(e) => handleChange(e, "speed")}
        colorScheme="teal"
        name="speed"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <FormLabel>Select Array Length:</FormLabel>
      <Slider
        isDisabled={isSorting}
        min={MIN_ARRLENGTH}
        max={MAX_ARRLENGTH}
        defaultValue={arrLength}
        onChange={(e) => handleChange(e, "length")}
        colorScheme="teal"
        name="arrayLength"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Button
        name="isSorting"
        isDisabled={isSorting}
        marginTop="20px"
        className="controlButtons"
        onClick={sort}
      >
        Sort
      </Button>
      <Button
        isDisabled={!isSorting}
        marginTop="20px"
        className="controlButtons"
        onClick={stop}
      >
        Stop
      </Button>
      <br />
      <Button
        className="controlButtons"
        isDisabled={isSorting}
        margin="20px"
        onClick={shuffle}
      >
        Shuffle
      </Button>
      <AlgoInformation algo={algo} />
    </Box>
  );
};

export default Controls;
