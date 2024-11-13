



import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export const AddReading = ({ isReading, bookId, onStatusChange }) => {
  const initialValues = { page: '' };

  const validationSchema = Yup.object({
    page: Yup.number()
      .required('Required')
      .positive('Must be a positive number')
      .integer('Must be an integer')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    
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
            <label>Page Number</label>
            <Field type="number" name="page" />
            <ErrorMessage name="page" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting}>{isReading ? 'To stop' : 'To start'}</button>
          {status && <div className={status.success ? 'success' : 'error'}>{status.message}</div>}
        </Form>
      )}
    </Formik>
  );
};

