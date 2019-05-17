import { useState, useEffect } from "react";

// TODO:refactor here
interface UseFormProps {
  callback: () => void;
  validate: () => void;
}

const useForm = (callback: any, validate: any) => {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [errors]);

  const handleSubmit = (event: any): void => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (name: string, value: string) => {
    setValues((values: any) => ({
      ...values,
      [name]: value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
