import React,{useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// const MyForm = () => {
//   const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     age: '',
//   };
const MyForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  const validationSchema = Yup.object({
    id: Yup.number().typeError('id must be a number').required('id is required'),
    Name: Yup.string().required('Name is required'),
    UserName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    
  });

  // const onSubmit = (values, { resetForm }) => {
  //   console.log('Form submitted:', values);
  //   resetForm();
  // };

  const onSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    addUser(values); 
    resetForm();
  };

  return (
    <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
      <div>
          <label htmlFor="id">Userid:</label>
          <Field type="text" id="id" name="id" />
          <ErrorMessage name="id" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="Name">Name:</label>
          <Field type="text" id="Name" name="Name" />
          <ErrorMessage name="Name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="UserName">User Name:</label>
          <Field type="text" id="UserName" name="UserName" />
          <ErrorMessage name="UserName" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyForm;
