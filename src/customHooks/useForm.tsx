import { useState, useEffect } from 'react';

const useForm = (initialValues: any, callback: Function, validate: any) => {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
    }

  }, [errors]);



  const handleSubmit = (event: Event) => {
    if (event) event.preventDefault();

    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
    }
    setErrors(validate(values))

    setIsSubmitting(true);
  };

  const handleChange = (event: any) => {
    event.persist();
    const { name, value, checked } = event.target;
    console.log(values)
    // setValues(values => ({ ...values, [name]: checked || value }));
  };

  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
    errors,
  }
};

export default useForm;
