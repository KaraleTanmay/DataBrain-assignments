import React from 'react'

export default function AllInfo(props) {

    const handleChange = () => {
        props.setView(true)
    }

    const handleReset = () => {
        window.location.reload()
    }

    const formValues = [
        { title: "Name", value: props.data.name },
        { title: "Email", value: props.data.email },
        { title: "Phone Number", value: props.data.phoneNumber },
        { title: "Date of Birth", value: props.data.dateOfBirth },
        { title: "Gender", value: props.data.gender ? "Male" : "Female" },
        { title: "Address Line 1", value: props.data.addressLine1 },
        { title: "Address Line 2", value: props.data.addressLine2 },
        { title: "City", value: props.data.city },
        { title: "State", value: props.data.state },
        { title: "Postal Code", value: props.data.postalCode },
        { title: "Bank Name", value: props.data.bankName },
        { title: "Branch Name", value: props.data.branchName },
        { title: "IFSC Code", value: props.data.ifscCode },
        { title: "Card Number", value: props.data.cardNumber },
        { title: "Account Number", value: props.data.accountNumber },
    ];

    return (
        <div className='w-full flex flex-col gap-y-2 '>
            <div className='w-full text-center text-[30px] font-bold text-purple-600'>
                Your Information
            </div>
            <div className='w-full'>

                {
                    formValues.map((ele, i) => {
                        return (
                            <div key={i}>
                                <div className='text-[25px] md:text-[30px] my-2'>

                                    {i === 0 && <div>Personal Information</div>}
                                    {i === 5 && <div>Address Information</div>}
                                    {i === 10 && <div>Payment Information</div>}
                                </div>
                                <div className='flex items-center gap-x-2'>
                                    <div className='font-semibold'>{ele.title} :</div>
                                    <div>{ele.value}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full flex items-center justify-between'>

                <button className='bg-purple-600 py-1 px-4 rounded-lg text-white' type='button' onClick={handleChange}>Make Changes</button>
                <button className='bg-purple-600 py-1 px-4 rounded-lg text-white' type="button" onClick={handleReset}>Reset form</button>
            </div>
        </div>
    )
}
