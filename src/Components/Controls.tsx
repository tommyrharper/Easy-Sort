import React from "react";
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

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
  isSorting: boolean;
}

interface Props {
  values: Values;
  handleChange: any;
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  array: number[];
  barStyle: any;
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
  const { isSorting, algo, arrLength, delay } = values;
  const { calcHeight } = barStyle;
  const speed = calcSpeed(delay);

  return (
    <Box marginLeft="20px">
      <FormLabel>Select Sorting Algorithm:</FormLabel>
      <Select
        value={algo}
        onChange={handleChange}
        name="algo"
        marginBottom="20px"
      >
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Selection Sort">Selection Sort</option>
        {/* <option value="Selection Sort">Merge Sort</option>
        <option value="Selection Sort">Quick Sort</option> */}
      </Select>
      <FormLabel>Select Speed:</FormLabel>
      <Slider
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
        onClick={(e) => {
          handleChange(e, true);
          executeAnimation(
            array,
            delay,
            calcHeight,
            setArray,
            handleChange,
            e,
            color,
            algo
          );
        }}
      >
        Sort
      </Button>
      <br />
      <Button
        className="controlButtons"
        isDisabled={isSorting}
        margin="20px"
        onClick={() => {
          setArray(generateArray(arrLength));
        }}
      >
        Shuffle
      </Button>
    </Box>
  );
};

export default Controls;
