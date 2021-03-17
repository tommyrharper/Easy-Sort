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
  useToken,
} from "@chakra-ui/react";
import { calcSpeed } from "../Helpers/Helpers";
import {
  MIN_ARRLENGTH,
  MAX_ARRLENGTH,
  MAX_SPEED,
  MIN_SPEED,
} from "../Helpers/Config";
import "./Controls.scss";
import { bubbleSort } from "../Algos/bubbleSort";
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
}

const Controls: React.FC<Props> = ({
  values,
  handleChange,
  setArray,
  array,
  barStyle,
}) => {
  const { isSorting, algo, arrLength, delay } = values;
  const { calcHeight } = barStyle;
  const speed = calcSpeed(delay);
  const teal = useToken("colors", "teal.300");
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
          bubbleSort(array, delay, calcHeight, setArray, handleChange, e, teal);
        }}
      >
        Sort
      </Button>
      <br />
      <Button
        className="controlButtons"
        isDisabled={isSorting}
        // margin="20px"
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
