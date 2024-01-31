import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(5, "minimum 5 characters required"),
    email: Yup.string().email().required('Email is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    gender: Yup.boolean().required('Gender is required')
});

const formObjects = [
    {
        label: "Name",
        name: "name",
    },
    {
        label: "Email",
        name: "email",
    },
    {
        label: "Phone Number",
        name: "phoneNumber",
    }
]

export default function BasicInfo(props) {

    const onSubmit = (values) => {
        props.setData(values)
        props.setStep(1);
    }

    return (
        <div>
            <Formik initialValues={props.data} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>

                <Form>
                    {
                        formObjects.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <label htmlFor={ele.name}>{ele.label}</label>
                                    <Field name={ele.name} type="text" id={ele.name} />
                                    <div>
                                        <ErrorMessage name={ele.name} />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div >
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <Field name="dateOfBirth" type="date" id="dateOfBirth" />
                        <div>
                            <ErrorMessage name="dateOfBirth" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        {["true", "false"].map(
                            (ele, i) => {
                                return (
                                    <div key={i} className="">
                                        <Field type="radio" id={ele + "tr"} name="gender" value={ele} />
                                        <label htmlFor={ele + "tr"} name="gender">{ele}</label>
                                    </div>
                                );
                            }
                        )}
                        <ErrorMessage name="gender" />
                    </div>
                    <div>
                        <button type="submit">Next</button>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}
