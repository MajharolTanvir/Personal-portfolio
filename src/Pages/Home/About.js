import React from "react";
import banner from "../../Utilities/pic/DSC_3583.JPG";

const About = () => {
  return (
    <div id="about" className="container mx-auto my-10 mb-10">
      <div className="mb-10 text-gray-300">
        <h4 className="text-3xl font-bold">About me</h4>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="my-10 mx-10 p-10 border-2 relative border-gray-900 rounded-full shadow-md shadow-cyan-400">
          <img
            src={banner}
            className="w-full rounded-full border-4 border-cyan-300"
            alt=""
          />
        </div>

        <div className="text-center">
          <p className="text-gray-300 px-10 text-justify">
            I am trying to focus and build my career as React developer. I have
            good Knowledge of Html, Css , Css framework ,Javascript, React,
            react packages and more think. Day by day I try and want to grow up
            my skills. I want to do a lot of big projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
