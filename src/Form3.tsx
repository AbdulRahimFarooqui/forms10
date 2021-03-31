import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void
}

const Form3: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .required('REQUIRED')
                    .email('Please provide a valid email address')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    handleNext();
                    console.log('from Form3, values: ', values);
                }, 10)
            }}
        >
            <Form>
                <label htmlFor="email">Email</label><br/>
                <Field name="email" type="text" /><br/>
                <ErrorMessage name="email" />
                <br />
                <br />
                <button className="next" type="submit">GO!</button>
            </Form>
        </Formik>
    )
}

export default Form3;