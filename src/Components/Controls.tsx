import React from "react";
import { Select, FormLabel, Box } from "@chakra-ui/react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Values {
  algo: string;
  delay: number;
}

interface Props {
  values: Values;
  handleChange: any;
}

const Controls: React.FC<Props> = ({ values, handleChange }) => {
  console.log(`values`, values);
  // console.log(`algo`, algo);
  return (
    <Box>
      <FormLabel>Select Sorting Algorithm:</FormLabel>
      <Select value={values.algo} onChange={handleChange} name="algo">
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
        <option value="Selection Sort">Selection Sort</option>
      </Select>
      <FormLabel>Select Speed:</FormLabel>
    </Box>
  );
};

export default Controls;
