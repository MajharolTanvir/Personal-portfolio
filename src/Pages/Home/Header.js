import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../Utilities/pic/DSC_3583.JPG'

const Header = () => {
    return (
        <div className="absolute top-0 -z-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
                    <h3 className="text-3xl font-bold mb-8">Subheading</h3>
                    <button type="button"
                        className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Get started
                    </button>
                </div>
                <div className='my-10 p-10 border-2 border-gray-900 rounded-full'>
                    <div className='p-10 border-2 relative border-gray-800 rounded-full'>
                        <div>
                            <Link to='' className='absolute'>Linkedin</Link>
                        </div>
                        <div className='p-10 border-2 border-gray-800 rounded-full'>
                            <img src={banner} className='w-96 rounded-full border-2 border-gray-300' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;