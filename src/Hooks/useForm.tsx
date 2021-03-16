import { useState } from "react";
import { calcDelay } from "../Helpers/Helpers";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>, opt?: string) => {
      let name: string;
      let value: string | number;
      if (typeof e === "number") {
        if (opt === "speed") {
          name = "delay";
          value = calcDelay(e);
        } else return;
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
