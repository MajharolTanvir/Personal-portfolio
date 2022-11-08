import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import teamProject from "../../Utilities/project/my-Scheduler.png";

const Project = () => {
  const navigate = useNavigate();

  const { data: projects, isLoading } = useQuery("projects", () =>
    fetch("data.json").then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div
        className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  const handleDetails = (id) => {
    navigate(`/projectDetails/${id}`);
  };

  return (
    <div id="project" className="py-10 my-10 container mx-auto text-cyan-300">
      <div className=" mb-10 flex justify-center items-center gap-2">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
          My Latest Project
        </h4>
        <AiFillCaretRight />
      </div>
      <div className="mx-5 lg:mx-0">
        <h6 className="font-bold text-lg pb-5 px-3 md:px-0">Team Project</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mb-5 lg:mb-10">
          <img src={teamProject} alt="" />
          <div className="lg:col-span-2">
            <h5 className="text-lg md:text-2xl font-bold mb-3">
              <span>Name: </span>MyScheduler
            </h5>
            <p className="text-sm md:text-md lg:text-lg mb-3">
              <span className="font-bold">About: </span>This is an interview
              scheduling, Meeting setup website
            </p>
            <ul className="text-sm md:text-md lg:text-lg mb-3 mb-3">
              <span className="font-bold">Core Feature: </span>
              <li className="list-disc">
                Host can easily customized an event by his on available time.
              </li>
              <li className="list-disc">
                Host can invite any one by his own event link to book an
                appointment.
              </li>
              <li className="list-disc">
                Invitee can see the link with the host available time.
              </li>
              <li className="list-disc">
                Invitee can select a time to booked appointment with host.
              </li>
            </ul>
            <ul className="text-sm md:text-md lg:text-lg mb-3 mb-3">
              <span className="font-bold">Faced problems: </span>
              <li className="list-disc">Integrate the Google Calendar API.</li>
              <li className="list-disc">Integrate the Google Meet API.</li>
              <li className="list-disc">
                Set up the availability for auto set when a user create an
                account.
              </li>
            </ul>
            <ul className="text-sm md:text-md lg:text-lg mb-3 mb-3">
              <span className="font-bold">Core Technologies: </span>
              <li className="list-disc">React</li>
              <li className="list-disc">Typescript</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h6 className="font-bold text-lg pb-5 px-3 md:px-0">
          My personal Project
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-0">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex justify-center  shadow-md rounded-lg shadow-cyan-300"
            >
              <div className="rounded-lg bg-gray-900 ">
                <a href="#!">
                  <img className="rounded-t-lg" src={project.image} alt="" />
                </a>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-medium mb-2">{project.name}</h5>
                  <div>
                    <button
                      onClick={() => handleDetails(project._id)}
                      type="button"
                      className="inline-block px-4 py-1.5 text-cyan-300 hover:text-gray-900 font-bold text-xs leading-tight uppercase rounded hover: border-cyan-300 border-2 shadow-md hover:bg-cyan-300 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-2 w-full"
                    >
                      View project details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
