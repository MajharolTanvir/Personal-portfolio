import React from 'react';

const MySkills = () => {
    return (
        <div className='container mx-auto mt-20 mb-10  px-3 md:px-0' id='skills'>
            <div className='mb-20 text-gray-300'>
                <h4 className='text-3xl font-bold'>My skills</h4>
            </div>
            <ol className="border-l md:border-l-0 md:border-t border-gray-300 md:flex md:justify-center md:gap-5">
                <li>
                    <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                    </div>
                    <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                        <h4 className="text-gray-300 mt-3 font-semibold text-xl mb-1.5 ">Experts</h4>
                        <p className="text-gray-400 mb-3">Html5, CSS3, Bootstrap, Tailwind, Javascript, Javascript(Es6), React, API integration, Firebase(Authentication).</p>
                    </div>
                </li>
                <li>
                    <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                    </div>
                    <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                        <h4 className="text-gray-300 mt-3 font-semibold text-xl mb-1.5 ">Comfortable</h4>
                        <p className="text-gray-400 mb-3">Node.js, Express.js, MongoDB, React query, React hook from.</p>
                    </div>
                </li>
                <li>
                    <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                    </div>
                    <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                        <h4 className="text-gray-300 mt-3 font-semibold text-xl mb-1.5 ">Familiar</h4>
                        <p className="text-gray-400 mb-3">Typescript, Redux, Axios, Json web Token, React native,  WordPress.</p>
                    </div>
                </li>
                <li>
                    <div className="flex md:block flex-start items-center pt-2 md:pt-0">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                    </div>
                    <div className="mt-0.5 ml-4 md:ml-0 pb-5">
                        <h4 className="text-gray-300 mt-3 font-semibold text-xl mb-1.5 ">Tools</h4>
                        <p className="text-gray-400 mb-3">Github, Heroku, Netlify, Visual studio code, Chrome dev tools, Postman.</p>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default MySkills;