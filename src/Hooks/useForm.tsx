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
      }
    }
    case "length": {
      name = "arrLength";
      value = e;
      if (value <= MIN_ARRLENGTH) value = MIN_ARRLENGTH;
      return {
        name: name,
        value: value,
      }
    }
    default: {
      throw  new Error('Number used without option');
    }
  }
}

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>, opt?: string) => {
      let name: string;
      let value: string | number;
      if (typeof e === "number") {
        const nameValueObj = handleNumber(e, opt);
        name = nameValueObj.name;
        value = nameValueObj.value;
      } else {
        name = e.target.name;
        value = e.target.value;
      }
      setValues({
        ...values,
        [name]: value,
      });
    },
  ];
};
