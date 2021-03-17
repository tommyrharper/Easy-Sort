import { useState } from "react";
import { calcDelay } from "../Helpers/Helpers";
import { MIN_ARRLENGTH } from "../Helpers/Config";

const handleNumber = (e: number, opt?: string) => {
  let name: string;
  let value: number;
  switch (opt) {
    case "speed": {
      name = "delay";
      value = calcDelay(e);
      return {
        name: name,
        value: value,
      };
    }
    case "length": {
      name = "arrLength";
      value = e;
      if (value <= MIN_ARRLENGTH) value = MIN_ARRLENGTH;
      return {
        name: name,
        value: value,
      };
    }
    default: {
      throw new Error("Number used without option");
    }
  }
};

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>, opt?: any) => {
      let name: string;
      let value: string | number | boolean;

      if (opt === "passObject") {
        for (const [key, val] of Object.entries(e)) {
          values[key] = val;
        }
        setValues(values);
        return;
      }
      if (typeof e === "string") {
        name = e;
        value = opt;
      } else if (typeof e === "number") {
        const nameValueObj = handleNumber(e, opt);
        name = nameValueObj.name;
        value = nameValueObj.value;
      } else {
        name = e.target.name;
        value = e.target.value;
      }
      if (name === "isSorting") value = opt;

      setValues({
        ...values,
        [name]: value,
      });
    },
  ];
};
