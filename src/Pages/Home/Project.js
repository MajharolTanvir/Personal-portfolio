import React from 'react';
import { useQuery } from 'react-query';

const Project = () => {
    const { data: projects, isLoading } = useQuery('projects', () => fetch('data.json').then(res => res.json()))

    if (isLoading) {
        return <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    return (
        <div id='project' className='py-20 container mx-auto'>
            <div className='mb-20 text-gray-300'>
                <h4 className='font-bold text-3xl'>My latest Project</h4>
                <p>My last 3 projects which I have given below. Feel free to view these.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                {
                    projects.map(project => <div key={project._id} className="flex justify-center  shadow-lg rounded-lg shadow-gray-300">
                        <div className="rounded-lg shadow-lg bg-gray-900 text-gray-300 max-w-sm">
                            <a href="#!">
                                <img className="rounded-t-lg" src={project.image} alt="" />
                            </a>
                            <div className="p-6 text-center">
                                <h5 className="text-gray-300 text-xl font-medium mb-2">{project.name}</h5>
                                <div className='flex flex-col'>
                                    <a target='_blank' rel="noreferrer" href={project.live} >
                                        <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Live site</button>
                                    </a>
                                    <a target='_blank' rel="noreferrer" href={project.clientSide} >
                                        <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Client side</button>
                                    </a>
                                    {project.serverSide && <a target='_blank' rel="noreferrer" href={project.serverSide} >
                                        <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Server side</button>
                                    </a>}
                                    <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Project details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Project;