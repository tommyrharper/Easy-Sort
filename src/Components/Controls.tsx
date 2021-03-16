import React from "react";
import {
  Select,
  FormLabel,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { calcSpeed } from "../Helpers/Helpers";

interface Values {
  algo: string;
  delay: number;
}

interface Props {
  values: Values;
  handleChange: any;
}

const Controls: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box>
      <FormLabel>Select Sorting Algorithm:</FormLabel>
      <Select
        value={values.algo}
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
        defaultValue={calcSpeed(values.delay)}
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
        defaultValue={calcSpeed(values.delay)}
        // onChange={(e) => handleChange(e, "length")}
        colorScheme="teal"
        name="arrayLength"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default Controls;
