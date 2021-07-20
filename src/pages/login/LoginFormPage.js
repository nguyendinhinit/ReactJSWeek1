import React from 'react';
import {Form, Formik} from 'formik';
import {Button, FormGroup} from '@material-ui/core';
import MyInput from "../../components/MyInput/MyInput";

const initialValues = {email: 'asfs', password: ''};
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    } else if (
        values.password.length < 8
    ) {
        errors.password = 'At least 8 character'
    }
    return errors;
};


const LoginFormPage = () => {

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                        <form onSubmit={handleSubmit}>
                            <MyInput
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <Button color={"primary"} variant={"contained"} type="submit" disabled={isSubmitting}>
                                LOGIN
                            </Button>
                        </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginFormPage;