import { useState } from "react";
import { calcDelay, calcArrLength } from "../Helpers/Helpers";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>, opt?: string) => {
      let name: string;
      let value: string | number;
      if (typeof e === "number") {
        switch (opt) {
          case 'speed': {
            name = 'delay';
            value = calcDelay(e);
            break;
          }
          case 'length': {
            name = 'arrLength';
            value = calcArrLength(e);
            if (!value) value = 1;
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
