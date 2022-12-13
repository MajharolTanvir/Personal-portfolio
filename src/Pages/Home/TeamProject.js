import React from "react";
import image1 from "../../Utilities/project/2.png";
import image2 from "../../Utilities/project/1.png";
import image3 from "../../Utilities/project/3.png";
import image4 from "../../Utilities/project/4.png";
import Carousel from "nuka-carousel/lib/carousel";

const TeamProject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mb-5 lg:mb-10 items-center">
      <div className="container">
        <Carousel
          wrapAround={true}
          slidesToShow={2}
          autoplay={true}
          withoutControls={true}
        >
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </Carousel>
      </div>

      <div>
        <h5 className="text-lg md:text-2xl font-bold mb-3">
          <span>Name: </span>MyScheduler
        </h5>
        <div>
          <button
            type="button"
            className="inline-block my-2 px-6 py-2.5 border-2 border-cyan-300 text-cyan-300 hover:text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:bg-cyan-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <a href="https://myscheduler-893bf.web.app/">Visit web</a>
          </button>{" "}
          ||{" "}
          <button
            type="button"
            className="inline-block my-2 px-6 py-2.5 border-2 border-cyan-300 text-cyan-300 hover:text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:bg-cyan-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <a href="https://github.com/MajharolTanvir/Myscheduler">
              Client side
            </a>
          </button>{" "}
          ||{" "}
          <button
            type="button"
            className="inline-block my-2 px-6 py-2.5 border-2 border-cyan-300 text-cyan-300 hover:text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:bg-cyan-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <a href="https://github.com/MajharolTanvir/Myscheduler-server">
              Server side
            </a>
          </button>
        </div>
        <p className="text-sm md:text-md lg:text-lg mb-3">
          <span className="font-bold">About: </span>This is an interview
          scheduling, Meeting setup website.
        </p>
        <ul className="text-sm md:text-md lg:text-lg mb-3">
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
        <ul className="text-sm md:text-md lg:text-lg mb-3">
          <span className="font-bold">Faced problems: </span>
          <li className="list-disc">Integrate the Google Calendar API.</li>
          <li className="list-disc">Integrate the Google Meet API.</li>
        </ul>
        <ul className="text-sm md:text-md lg:text-lg mb-3">
          <span className="font-bold">Core Technologies: </span>
          <li className="list-disc">React</li>
          <li className="list-disc">Typescript</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamProject;
