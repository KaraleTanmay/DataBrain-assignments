import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    addressLine1: Yup.string().required('Street address is required'),
    addressLine2: Yup.string().required('Address line 2 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State/Province is required'),
    postalCode: Yup.string().required('Postal code/ZIP code is required').matches(/^[0-9]+$/, 'only numeric values are allowed')
        .typeError('Phone Number must be numeric'),
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
                                <button className='bg-purple-600 py-1 px-4 rounded-lg text-white' type="submit">Next</button>
                            </div>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
