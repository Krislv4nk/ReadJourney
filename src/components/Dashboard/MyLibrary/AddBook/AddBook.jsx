

import  { useState } from 'react';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export const AddBook = () => {
  const initialValues = {
    title: '',
    author: '',
    pages: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    pages: Yup.number()
      .required('Required')
      .positive('Must be a positive number')
      .integer('Must be an integer')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await axios.post('https://backend-readjourney.onrender.com/books', values);
      setStatus({ success: true, message: 'Book added successfully!' });
      resetForm();
      // 
    } catch (error) {
      setStatus({ success: false, message: error.response?.data?.message || 'An error occurred' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <div>
            <label>Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div>
            <label>Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div>
            <label>Pages</label>
            <Field type="number" name="pages" />
            <ErrorMessage name="pages" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>Add book</button>
          {status && <div className={status.success ? 'success' : 'error'}>{status.message}</div>}
        </Form>
      )}
    </Formik>
  );
};




 
