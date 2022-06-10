import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const id = useParams()
    const { data: projects, isLoading } = useQuery('projects', () => fetch('data.json').then(res => res.json()))
    console.log(projects, id)

    if (isLoading) {
        return <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    // const project = projects.filter(id === projects._id)
    // console.log(project);

    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    );
};

export default ProjectDetails;