import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { HomePageButton } from './Profile'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label>{label}
        <input {...field} {...props} />
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </label>
    </div>
  );
};

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <label>{label}
        <select {...field} {...props} />
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </label>
    </div>
  )
}

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <input type='checkbox' {...field} {...props} />
      {children}
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  )
}

export const Subscribe = () => {
  return (
    <div className="flex flex-column items-center">
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false,
          privacyTerms: false,
          jobType: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
           lastName: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
           email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
           acceptedTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
           privacyTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
           jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'engineer', 'product', 'other'],
               'Invalid Job Type'
             )
             .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
           }, 400);
         }}
      >
        <Form>
         <TextInput 
           label='First Name'
           name='firstName'
           type='text'
           placeholder='Kevin'
         />
         <TextInput 
           label='Last Name'
           name='lastName'
           type='text'
           placeholder='Zhang'
         />
         <TextInput 
           label='Email'
           name='email'
           type='email'
           placeholder='kevinzhang@gmail.com'
         />
         <SelectInput label='Job Type' name='jobType'>
          <option disabled value=''>Select a job type</option>
          <option value='designer'>Designer</option>
          <option value='development'>Development</option>
          <option value='engineer'>Engineer</option>
          <option value='product'>Product</option>
          <option value='other'>Other</option>
         </SelectInput>
         <Checkbox name='acceptedTerms'>
           I Agree to Terms & Conditions
         </Checkbox>
         <Checkbox name='privacyTerms'>
           I Agree to Privacy Conditions
         </Checkbox>
        </Form>
      </Formik>
      <HomePageButton className={pillGrow} onClick={() => history.push('/')}>
        Home
      </HomePageButton>
    </div>
  )
}
