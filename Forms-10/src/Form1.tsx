import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void
}

const Form1: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ firstName: '',lastName: '',nickName: '', countryName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .matches(/[^,|./?><:"';{})(0987654321-=+_`~[!@#$%^&*]/g, 'No characters other than alphabets')
                    .max(15, 'Must be within 16 characters')
                    .min(3, 'Must be longer than 2 characters')
                    .required('First Name is REQUIRED'),
                lastName: Yup.string()
                    .matches(/[^,|./?><:"';{})(0987654321-=+_`~[!@#$%^&*]/g, 'No characters other than alphabets')
                    .max(15, 'Must be within 16 characters')
                    .min(3, 'Must be longer than 2 characters')
                    .required('Last Name is REQUIRED'),
                nickName: Yup.string()
                    .max(15, 'Must be within 16 characters')
                    .min(3, 'Must be longer than 2 characters'),
                age:Yup.number()
                .min(18,"C'mon man! You gatta be kiddin me. This is Newsletter is for real people")
                .max(100,"Hey! Be serious here!")
                .required("Age is required"),
                countryName: Yup.string()
                    .matches(/[^,|./?><:"';{})(0987654321-=+_`~[!@#$%^&*]/g, 'No characters other than alphabets')
                    .max(15, 'Must be within 16 characters')
                    .min(4, 'Must be longer than 3 characters')
                    .required('Country Name is REQUIRED')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    handleNext();
                }, 200);
            }}
        >
            <div className="form-1">
                <Form>
                    <label htmlFor='firstName'>Your First Name</label><br />
                    <Field name="firstName" type="text"  className="label"/><br />
                    <ErrorMessage name="firstName" className="error"/>

                    <br />

                    <label htmlFor='lastName' >Your Last Name</label><br />
                    <Field name="lastName" type="text" className="label"/><br />
                    <ErrorMessage name="lastName" className="error"/>

                    <br />

                    <label htmlFor='age' >Your Age</label><br />
                    <Field name="age" type="number" className="label"/><br />
                    <ErrorMessage name="age" className="error"/>

                    <br />

                    <label htmlFor='nickName'>Your Nick Name</label><br />
                    <Field  className="label" name="nickName" type="text" placeholder="(OPTIONAL)" /><br />
                    <ErrorMessage name="nickName" className="error"/>

                    <br />

                    <label htmlFor='countryName'>Country of residence</label><br />
                    <Field  className="label" name="countryName" type="text" /><br />
                    <ErrorMessage name="countryName" className="error"/>

                    <br />

                    <button className="next" type="submit">NEXT</button>
                </Form>
            </div>
        </Formik>
    )
}

export default Form1;