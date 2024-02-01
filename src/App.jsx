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

    const [view, setView] = useState(true)

    const forms = [
        <BasicInfo data={basicInfo} setData={setBasicInfo} setStep={setStep} />,
        <AddressInfo data={addressInfo} setData={setAddressInfo} setStep={setStep} more={basicInfo} />,
        <BankInfo data={paymentInfo} setData={setPaymentInfo} setStep={setStep} setView={setView} />,

    ]

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center overflow-y-scroll m-auto'>
            <div className="p-4 md:p-6 border-[1px] rounded-lg border-slate-300 m-auto w-[90%] md:w-[40%] bg-white">

                {
                    view ? forms[step] : <AllInfo data={{ ...basicInfo, ...addressInfo, ...paymentInfo }} setView={setView} />
                }

            </div>

        </div>
    )
}

