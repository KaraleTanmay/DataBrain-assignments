import React, { useState } from 'react'
import BasicInfo from './components/BasicInfo'
import AddressInfo from './components/AddressInfo';
import BankInfo from './components/BankInfo';
import AllInfo from './components/AllInfo';

export default function App() {

    const [step, setStep] = useState(0);
    const [basicInfo, setBasicInfo] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        phoneNumber: '',
        gender: '',
    });
    const [addressInfo, setAddressInfo] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
    });
    const [paymentInfo, setPaymentInfo] = useState({
        bankName: '',
        branchName: '',
        ifscCode: '',
        accountNumber: '',
        cardNumber: '',
    });

    const forms = [
        <BasicInfo data={basicInfo} setData={setBasicInfo} setStep={setStep} />,
        <AddressInfo data={addressInfo} setData={setAddressInfo} setStep={setStep} more={basicInfo} />,
        <BankInfo data={paymentInfo} setData={setPaymentInfo} setStep={setStep} />,
        <AllInfo data={{ ...basicInfo, ...addressInfo, ...paymentInfo }} />,
    ]

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>

            {
                forms[step]
            }

        </div>
    )
}

