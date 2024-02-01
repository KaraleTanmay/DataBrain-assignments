import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    bankName: Yup.string().required('Name of the bank is required'),
    branchName: Yup.string().required('Branch name is required'),
    ifscCode: Yup.string().required('IFSC code is required').matches(/^[0-9]+$/, 'only numeric values are allowed').typeError('Phone Number must be numeric'),
    accountNumber: Yup.string().required('Account number is required').matches(/^[0-9]+$/, 'only numeric values are allowed').typeError('Phone Number must be numeric'),
    cardNumber: Yup.string().required('Card number is required').matches(/^[0-9]+$/, 'only numeric values are allowed').typeError('Phone Number must be numeric'),
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
        props.setView(false);
        props.setStep(0);
    }

    return (
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full text-center text-[30px] font-bold text-purple-600'>
                Address Information
            </div>
            <Formik initialValues={props.data} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    ({ values }) => (
                        <Form className='flex flex-col justify-center items-start w-full'>
                            {
                                formObjects.map((ele, index) => {
                                    return (
                                        <div key={index} className='flex flex-col justify-center items-start gap-y-2 w-full'>
                                            <label htmlFor={ele.name} className='text-lg font-semibold '>{ele.label}</label>
                                            <Field name={ele.name} type="text" id={ele.name} className="w-full py-1 px-3 rounded-lg focus:outline-none border-slate-300 border-[1px]" />
                                            <div className='min-h-[15px] text-red-500 text-[10px]'>
                                                <ErrorMessage name={ele.name} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='w-full flex items-center justify-between mt-2'>
                                <button className='bg-purple-600 py-1 px-4 rounded-lg text-white' type='button' onClick={() => { handlePrev(values) }}>Previous</button>
                                <button className='bg-purple-600 py-1 px-4 rounded-lg text-white' type="submit">Submit</button>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}


