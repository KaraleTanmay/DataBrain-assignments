import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    addressLine1: Yup.string().required('Street address is required'),
    addressLine2: Yup.string().required('Address line 2 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State/Province is required'),
    postalCode: Yup.string().required('Postal code/ZIP code is required'),
});

const formObjects = [
    {
        label: "Address Line 1",
        name: "addressLine1",
    },
    {
        label: "Address Line 2",
        name: "addressLine2",
    },
    {
        label: "City",
        name: "city",
    },
    {
        label: "State/Province",
        name: "state",
    },
    {
        label: "Postal Code/ZIP Code",
        name: "postalCode",
    },
];


export default function AddressInfo(props) {

    const handlePrev = (values) => {
        props.setData((old) => ({ ...old, ...values }))
        props.setStep(0);
    }

    const onSubmit = (values) => {
        props.setData(values);
        props.setStep(2);
    }
    return (
        <div>
            <Formik initialValues={props.data} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    ({ values }) => (
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
                            <div>

                                <button type='button' onClick={() => { handlePrev(values) }}>Previous</button>
                                <button type="submit">Next</button>
                            </div>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
