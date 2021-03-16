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

interface Values {
  algo: string;
  delay: number;
  arrLength: number;
}

interface Props {
  values: Values;
  handleChange: any;
}

const Controls: React.FC<Props> = ({ values, handleChange }) => {
  const speed = calcSpeed(values.delay);
  return (
    <Box marginLeft="20px">
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
        defaultValue={values.arrLength}
        onChange={(e) => handleChange(e, "length")}
        colorScheme="teal"
        name="arrayLength"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Button marginTop="20px" className="controlButtons">Sort</Button>
      <br />
      <Button className="controlButtons">Shuffle</Button>
      <br />
      <Button className="controlButtons">Stop</Button>
    </Box>
  );
};

export default Controls;
