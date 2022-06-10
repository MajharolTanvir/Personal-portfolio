import React from 'react';
import Frontend from '../../Utilities/work/frontend.jpg'
import Backend from '../../Utilities/work/backend.jpg'
import MERN from '../../Utilities/work/mern.jpg'

const WorkDetails = () => {
    return (
        <div id='service' className="container mx-auto">
            <div className='mb-20 text-gray-300'>
                <h4 className='font-bold text-3xl'>Service</h4>
                <p>The jobs that I am experienced and work on About it is given below.</p>
            </div>
            <div className="rounded-lg bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                    <div className="block p-6 text-gray-300 rounded-lg shadow-lg bg-gray-900 max-w-sm shadow-gray-300">
                        <img src={Frontend} alt="" />
                        <h5 className=" mt-3 text-xl leading-tight font-medium mb-2">Frontend developer</h5>
                        <p>Html, Css, Bootstrap, Tailwind, Javascript, React.</p>
                    </div>
                    <div className="block p-6 text-gray-300 rounded-lg shadow-lg bg-gray-900 max-w-sm shadow-gray-300">
                        <img src={Backend} alt="" />
                        <h5 className="mt-3 text-xl leading-tight font-medium mb-2">Backend developer</h5>
                        <p className="text-gray-300 text-base mb-4">Node, Express, MongoDB.</p>
                    </div>
                    <div className="block p-6 rounded-lg text-gray-300 shadow-lg bg-gray-900 max-w-sm shadow-gray-300">
                        <img src={MERN} alt="" />
                        <h5 className="mt-3 text-xl leading-tight font-medium mb-2">MERN stack developer</h5>
                        <p className="text-gray-300 text-base mb-4">Html, Css, Bootstrap, Tailwind, Javascript, React, Node, Express, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;