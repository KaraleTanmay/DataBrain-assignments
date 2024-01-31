import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    bankName: Yup.string().required('Name of the bank is required'),
    branchName: Yup.string().required('Branch name is required'),
    ifscCode: Yup.string().required('IFSC code is required'),
    accountNumber: Yup.string().required('Account number is required'),
    cardNumber: Yup.string().required('Card number is required'),
});

const formObjects = [
    {
        label: "Name of the Bank",
        name: "bankName",
    },
    {
        label: "Branch Name",
        name: "branchName",
    },
    {
        label: "IFSC Code",
        name: "ifscCode",
    },
    {
        label: "Account Number",
        name: "accountNumber",
    },
    {
        label: "Card Number",
        name: "cardNumber",
    },
];


export default function BankInfo(props) {

    const handlePrev = (values) => {
        props.setData((old) => ({ ...old, ...values }))
        props.setStep(1);
    }

    const onSubmit = (values) => {
        props.setData(values);
        props.setStep(3);
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
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
