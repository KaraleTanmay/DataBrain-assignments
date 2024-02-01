import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(5, "minimum 5 characters required"),
    email: Yup.string().email().required('Email is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    phoneNumber: Yup.string().required('Phone Number is required').matches(/^[0-9]+$/, 'only numeric values are allowed')
        .typeError('Phone Number must be numeric'),
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
        <div className='w-full flex flex-col gap-4'>
            <div className='w-full text-center text-[30px] font-bold text-purple-600'>
                Basic Information
            </div>
            <Formik initialValues={props.data} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>

                <Form className='flex flex-col justify-center items-start w-full'>
                    {
                        formObjects.map((ele, index) => {
                            return (
                                <div key={index} className='flex flex-col justify-center items-start gap-y-2 w-full'>
                                    <label htmlFor={ele.name} className='text-lg font-semibold '>{ele.label}</label>
                                    <Field name={ele.name} type="text" id={ele.name} className="w-full py-1 px-3 rounded-lg focus:outline-none border-[1px] border-slate-300" />
                                    <div className='min-h-[15px] text-red-500 text-[10px]'>
                                        <ErrorMessage name={ele.name} />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='flex flex-col justify-center items-start gap-y-2 w-full'>
                        <label htmlFor="dateOfBirth" className='text-lg font-semibold '>Date of Birth</label>
                        <Field name="dateOfBirth" type="date" id="dateOfBirth" className="w-full py-1 px-3 rounded-lg focus:outline-none border-slate-300 border-[1px]" />
                        <div className='min-h-[15px] text-red-500 text-[10px]'>
                            <ErrorMessage name="dateOfBirth" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-2 w-full'>
                        <label htmlFor="gender" className='text-lg font-semibold '>Gender</label>
                        {["true", "false"].map(
                            (ele, i) => {
                                return (
                                    <div key={i} className="flex justify-center items-center gap-1 text-md">
                                        <Field type="radio" id={ele + "tr"} name="gender" value={ele} />
                                        <label htmlFor={ele + "tr"} name="gender">{ele === "true" ? "Male" : "Female"}</label>
                                    </div>
                                );
                            }
                        )}
                        <div className='min-h-[15px] text-red-500 text-[10px]'>
                            <ErrorMessage name="gender" />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-end mt-2'>
                        <button type="submit" className='bg-purple-600 py-1 px-4 rounded-lg text-white'>Next</button>
                    </div>
                </Form>

            </Formik>
        </div>
    )
}
