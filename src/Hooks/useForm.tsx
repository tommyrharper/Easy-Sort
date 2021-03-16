import { useState } from "react";
import { calcDelay } from "../Helpers/Helpers";
import { MIN_ARRLENGTH } from "../Helpers/Config";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>, opt?: string) => {
      let name: string;
      let value: string | number;
      if (typeof e === "number") {
        switch (opt) {
          case "speed": {
            name = "delay";
            value = calcDelay(e);
            break;
          }
          case "length": {
            name = "arrLength";
            value = e;
            if (value <= MIN_ARRLENGTH) value = MIN_ARRLENGTH;
            break;
          }
          default: {
            return;
          }
        }
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
