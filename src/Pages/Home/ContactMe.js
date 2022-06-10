import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaFacebookSquare, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from 'react-toastify';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gf02ufa', 'template_9h0nh3o', form.current, 'sE1TsmGycp0fjGGW1')
            .then((result) => {
                console.log(result.text);
                toast.success('Your email send successfully')
                e.target.reset();
            }, (error) => {
                toast.error(error.text);
            });
    };
    return (
        <div>
            <div className='mb-20' id='contact'>
                <h4 className='text-3xl text-gray-300 font-bold'>Contact me</h4>
                <p></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="flex justify-center items-center">
                    <div className="block p-6 rounded-lg shadow-md shadow-gray-300 bg-gray-900 max-w-sm">
                        <div className='flex items-center'>
                            <AiOutlineMail className='text-4xl mr-3 text-gray-300 my-2' />
                            <h5 className="text-gray-300 text-xl leading-tight font-medium mb-2"> majharul5456@gmail.com</h5>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneAlt className='text-4xl mr-3 text-gray-300 my-2' />
                            <h5 className="text-gray-300 text-xl leading-tight font-medium mb-2"> (+880) 18160-66160 </h5>
                        </div>
                        <div className='flex items-center'>
                            <FaWhatsapp className='text-4xl mr-3 text-gray-300 my-2' />
                            <h5 className="text-gray-300 text-xl leading-tight font-medium mb-2"> (+880) 18160-66160 </h5>
                        </div>
                        <div className='flex justify-around'>
                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/MajharulTanvir.rgt/" className='text-4xl '><FaFacebookSquare className='text-gray-300 my-2' /></a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/majharul-tanvir-rgt/" className='text-4xl'><FaLinkedin className='text-gray-300 my-2' /></a>
                        </div>
                    </div>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-900 shadow-gray-300 max-w-md">
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='text-gray-300'>Name</label>
                        <input type="text" name="user_name" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                        <label className='text-gray-300'>Email</label>
                        <input type="email" name="user_email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                        <label className='text-gray-300'>Message</label>
                        <textarea name="message" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                        <input type="submit" value="Send" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;