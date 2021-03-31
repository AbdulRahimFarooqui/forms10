import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void
}

const Form2:React.FC<Props>=({handleNext})=>{
    return(
        <Formik
        initialValues={{companyName:"", companyLocation:"",jobTitle:""}}
        validationSchema={Yup.object({
            companyName:Yup.string()
            .max(16,'Must be witin 16 characters of limit')
            .min(3,'Must be at least 3 characters long')
            .required('Company Name is required'),
            companyLocation:Yup.string()
            .max(100,'Must be witin 100 characters of limit')
            .min(10,'Must be at least 10 characters long')
            .required('Company Location is required'),
            jobTitle:Yup.string()
            .max(16,'Must be witin 16 characters of limit')
            .min(3,'Must be at least 3 characters long')
            .required('Job Title is required'),
        })}
        onSubmit={(values)=>{
            setTimeout(()=>{
                console.log('from lastName, Form2: ',values);
                handleNext();
            },800)
        }}
        >
            <Form>
                <label htmlFor="companyName">Company Name</label><br/>
                <Field className="label" name="companyName" type="text"/><br/>
                <ErrorMessage name="companyName"/>
                <br/>
                <label htmlFor="companyLocation">Company's Physical Location</label><br/>
                <Field className="label" name="companyLocation" type="text"/><br/>
                <ErrorMessage name="companyLocation"/>
                <br/>
                <label htmlFor="jobTitle">Your Job Title</label><br/>
                <Field className="label" name="jobTitle" type="text"/><br/>
                <ErrorMessage name="jobTitle"/>
                <br/>
                <button className="next" type="submit">NEXT</button>
            </Form>
        </Formik>
    )
}

export default Form2;