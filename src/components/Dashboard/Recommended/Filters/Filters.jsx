


import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from '../../Dashboard.module.css';

export const Filters = () => {
  
  const initialValues = {
    title: '',
    author_name: ''
}
  
const getValidationSchema = () => {
  return Yup.object().shape({
    title: Yup.string(),
    author_name: Yup.string()
  }).test(
    'at-least-one-field',
    'Please enter either the title or author name',
    (values) => values.title.trim() !== '' || values.author_name.trim() !== ''
  );
};

const handleAuthSubmit = (values) => {
  // 
  console.log(values);
};
   
  

  return (
    
    <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema()} 
        onSubmit={handleAuthSubmit}
    >
      <Form className={css.FilterForm}>
        <h5 className={css.filterTitle}>Filters:</h5>
        
        <div className={css.inputFilterContainer}>
              <label className={css.filterLabel} htmlFor="title">Book title:</label>
              <Field type="text" name="title" className={css.filterField} placeholder="Enter text" />
              <ErrorMessage name="title" component="div" className={css.filterError} />
            </div>
            <div className={css.inputFilterContainer}>
              <label className={css.filterLabel} htmlFor="author">The author:</label>
              <Field type="text" name="author" className={css.filterField} placeholder="Enter text" />
              <ErrorMessage name="author" component="div" className={css.filterError} />
            </div>
      
        <button type="submit" className={css.filterBtn}>To apply</button>
        </Form>
    </Formik>
  );
};


