import { useState } from "react";
import { calcDelay } from "../Helpers/Helpers";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      let name: string;
      let value: string | number;
      if (typeof e === "number") {
        name = "delay";
        value = calcDelay(parseInt(e));
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
