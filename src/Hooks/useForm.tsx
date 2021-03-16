import { useState } from "react";

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
