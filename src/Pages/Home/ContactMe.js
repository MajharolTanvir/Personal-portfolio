import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const ContactMe = () => {
    return (
        <div>
            <div className='mb-20'>
                <h4 className='text-3xl text-gray-300 font-bold'>Contact me</h4>
                <p></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div class="flex justify-center items-center">
                    <div class="block p-6 rounded-lg shadow-md shadow-gray-300 bg-gray-900 max-w-sm">
                        <div className='flex items-center'>
                            <AiOutlineMail className='text-4xl mr-3 text-gray-300 my-2' />
                            <h5 class="text-gray-300 text-xl leading-tight font-medium mb-2"> majharul5456@gmail.com</h5>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneAlt className='text-4xl mr-3 text-gray-300 my-2' />
                            <h5 class="text-gray-300 text-xl leading-tight font-medium mb-2"> (+880) 18160-66160 </h5>
                        </div>
                        <div className='flex items-center'>
                            <FaWhatsapp className='text-4xl mr-3 text-gray-300 my-2' />
                            <h5 class="text-gray-300 text-xl leading-tight font-medium mb-2"> (+880) 18160-66160 </h5>
                        </div>
                        <div className='flex justify-around'>
                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/MajharulTanvir.rgt/" className='text-4xl '><FaFacebookSquare className='text-gray-300 my-2' /></a>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/majharul-tanvir-rgt/" className='text-4xl'><FaLinkedin className='text-gray-300 my-2' /></a>
                        </div>
                    </div>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-gray-900 shadow-gray-300 max-w-md">
                    <form>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Name" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                placeholder="Email address" />
                        </div>
                        <div className="form-group mb-6">
                            <textarea
                                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message">
                            </textarea>
                        </div>
                        <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;