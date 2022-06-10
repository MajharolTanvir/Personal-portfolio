import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
const port = process.env.PORT || 3000

const ProjectDetails = () => {
    const { id } = useParams()
    const { data: projects, isLoading } = useQuery('projects', () => fetch(`http://localhost:${port}/data.json`).then(res => res.json()))

    if (isLoading) {
        return <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    const project = projects.find(project => id === project._id)

    return (
        <div className="flex justify-center ">
            <div className="rounded-lg shadow-lg shadow-gray-300 bg-gray-900 max-w-sm">
                <a href="#!">
                    <img className="rounded-t-lg" src={project.image} alt="" />
                </a>
                <h4 className='text-gray-300 text-2xl mt-5 font-bold'>{project.name}</h4>
                <div className="p-6">
                    <div class="flex justify-center">
                        <ul class="bg-gray-900  rounded-lg border border-gray-200 w-96 text-gray-300">
                            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">{project.about}</li>
                            <li class="px-6 py-2 w-full rounded-b-lg"><strong>Techonology:</strong> {project.techonology}</li>
                        </ul>
                    </div>
                    <a target='_blank' rel="noreferrer" href={project.live} >
                        <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Live site</button>
                    </a>
                    <a target='_blank' rel="noreferrer" href={project.clientSide} >
                        <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Client side</button>
                    </a>
                    {project.serverSide && <a target='_blank' rel="noreferrer" href={project.serverSide} >
                        <button type="button" className="inline-block px-4 py-1.5 bg-gray-300 text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:text-gray-300 hover: border-gray-300 border-2 shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full">Server side</button>
                    </a>}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;