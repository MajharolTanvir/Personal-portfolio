import React from 'react';
import banner from '../../Utilities/pic/DSC_3583.JPG'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import myResume from '../../Utilities/resume/myResume.pdf'

const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className="py-10 top-0 -z-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full">
                    <div className="text-left text-gray-300 px-6 md:px-12">
                        <h1 className="text-4xl font-bold mt-0 mb-6">I'm Majharul Tanvir</h1>
                        <h3 className="text-2xl font-bold mb-8">I am a Jr. Web Developer</h3>
                        <p>I am trying to focus and build my career as React developer. I have
                            good Knowledge of Javascript, React, etc. Day by day I try and want to grow up my skills</p>
                        <a href={myResume}>
                            <button type="button" className="inline-block my-5 px-6 py-2.5 border-2 border-gray-300 hover:border-gray-900 text-gray-300 hover:text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:bg-gray-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light"> My resume </button>
                        </a>
                    </div>
                    <div className='my-10 mx-10 p-10 border-2 relative border-gray-900 rounded-full shadow-lg shadow-gray-400'>
                        <div className='p-8 border-2 border-gray-800 rounded-full'>
                            <div className='text-center'>
                                <div>
                                    <a href='https://www.facebook.com/MajharulTanvir.rgt/' target='_blank' className='absolute animate-bounce text-3xl top-20 right-16 text-gray-300 my-2' rel='noreferrer'><FaFacebookSquare /></a>
                                </div>
                                <div>
                                    <a href='https://github.com/Tanvir5454' target='_blank' className='absolute animate-bounce text-3xl top-44 right-7  text-gray-300 my-2' rel='noreferrer'><FaGithubSquare /></a>
                                </div>
                                <div>
                                    <a href='https://www.linkedin.com/in/majharul-tanvir-rgt/' target='_blank' className='text-3xl p-1 bottom-24 animate-bounce absolute right-12 text-gray-300 my-2' rel='noreferrer'><FaLinkedin /></a>
                                </div>
                            </div>
                            <img src={banner} className='w-96 rounded-full border-2 border-gray-300' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;