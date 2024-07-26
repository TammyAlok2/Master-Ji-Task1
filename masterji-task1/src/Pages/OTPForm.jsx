'use client';

// components/OTPForm.js
import { useState, useRef } from 'react';
const image  = 'https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__'

const OTPForm = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [status, setStatus] = useState('Verify account');
    const [bgColor, setBgColor] = useState('bg-[rgb(20_40_102)] text-white py-[0.5rem] px-[3rem] rounded-md')
    const [inpFocusColor, setInpFocusColor] = useState('bg-[#e3e5ed] rounded-md')
    const correctOtp = '1234';
    const inputRefs = useRef([]);

    const handleChange = (value, index) => {
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 3 && value) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace') {
            if (otp[index] === '') {
                if (index > 0) {
                    inputRefs.current[index - 1].focus();
                }
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp === correctOtp) {
            setStatus('Verified');
            setBgColor('bg-[rgb(51_221_173)] text-white py-[0.5rem] px-[4.5rem] rounded-md')
            setInpFocusColor('bg-[#e3e5ed] rounded-md ring-1 ring-[rgb(51_221_173)]')
        } else {
            setStatus('Verification failed');
            setBgColor('bg-[rgb(234_26_106)] text-white py-[0.5rem] px-[2.1rem] rounded-md')
            setInpFocusColor('bg-[#e3e5ed] rounded-md ring-1 ring-[rgb(234_26_106)]')
        }
    };

    return (
        <div className='bg-[rgb(81_142_206)] h-[100vh] flex flex-col  justify-center'>
           <h1 className="text-6xl font-extrabold m-20 text-white justify-center text-center ">Chai Aur Code </h1>
        <div className='w-[25rem] rounded-lg mx-auto flex justify-center flex-col items-center gap-2 bg-white p-[1rem] '>
            <h1 className=' font-semibold text-[1.5rem] text-center'>Mobile Phone Verification</h1>
            <p className='text-center text-gray-700 mb-1'>Enter the 4-digit verification code that was sent to your phone number.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' }}>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        maxLength="1"
                        ref={(el) => (inputRefs.current[index] = el)}
                        style={{ width: '40px', textAlign: 'center', fontSize: '24px' }}
                        className={inpFocusColor}
                    />
                ))}
            </div>
            <button onClick={handleVerify} style={{ marginTop: '20px' }} className={`${bgColor}`}>
                {status}
            </button>
        </div>
        <div className="flex justify-end  m-28">
            <a href="https://chaicode.com/"><img src=
            {image} alt="lalok " className='h-28'/></a>
        </div>
        </div>
        
    );
};

export default OTPForm;