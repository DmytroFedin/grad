import React from "react";
import Style from './auth.module.scss';
import { Formik } from 'formik';
import axios from 'axios';

const AuthPage = () =>{

    const onSubmit1 = async (
      values,
      { setSubmitting, setErrors, setStatus, resetForm }
    ) => {
      const header = new Headers();
      header.append('Content-Type', 'application/json')
      try {
        await axios
          .post('/api/auth/authorisation', values, header)
          .then((response) => {
            console.log(response);
            setStatus({ success: true });
            resetForm({});
          })
          .catch((error) => {
            console.log(error.request);
            console.log(error.response.data);
            // const errorData = new Error(error)
            // console.log(errorData);
            resetForm({});
            setStatus({ success: false });
          });
      } catch (error) {
        console.log(error);
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message });
      }
    }
    return (
      <div className={Style.container}>
      <div className={Style.authPage}>
        <h1>Authorisation</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={onSubmit1}
        > 
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
        </div>
      </div>
    );
}

export default AuthPage

