import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
  cosnt [Field, meta] = useField(props);
  return (
    <div>
      <label>{label}
        <input {...field} {...props} />
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </label>
    </div>
  );
};

export const Subscribe = () => {
  return (
    <div>
      
    </div>
  )
}
