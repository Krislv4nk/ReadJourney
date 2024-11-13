

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AddBook.module.css';

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
        <Form className={css.form}>
          <h3 className={css.title}>Create your library:</h3>
          <div className={css.inputWrapper}>
            <label className={css.label}>Book title:</label>
            <Field className={css.field} type="text" name="title" placeholder="Enter text"/>
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label}>The author:</label>
            <Field className={css.field} type="text" name="author" />
            <ErrorMessage name="author" component="div" className="error" placeholder="Enter text"/>
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label}>Number of pages:</label>
            <Field className={css.field} type="number" name="pages" />
            <ErrorMessage  name="pages" component="div" className="error" placeholder="Enter text"/>
          </div>
          <button className={css.formBtn} type="submit" disabled={isSubmitting} title='Add book'>Add book</button>
          {status && <div className={status.success ? 'success' : 'error'}>{status.message}</div>}
        </Form>
      )}
    </Formik>
  );
};




 
