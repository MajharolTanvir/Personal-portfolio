import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const MySkills = () => {
  return (
    <div className="container mx-auto mt-20 px-3 md:px-0" id="skills">
      <div className="mb-10 flex justify-center items-center gap-2 text-cyan-300">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">My skills</h4>
        <AiFillCaretRight />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-cyan-300 text-center gap-5 lg:gap-8 mx-5 md:mx-0">
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Expert</h6>
          <p className="text-justify">
            HTML, CSS, Bootstrap, Tailwind, Javascript, React.js, Typescript,
            DaisyUI, Firebase.
          </p>
        </div>
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Comfortable</h6>
          <p className="text-justify">
            Node.js, Express.js, MongoDB, Axios, WordPress & Elementor.
          </p>
        </div>
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Familiar</h6>
          <p className="text-justify">
            Redux, Next.Js, React native, React testing library, Stripe.
          </p>
        </div>
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Tools</h6>
          <p className="text-justify">
            GitHub, Netlify, Render, Heroku, Postman, Chrome dev tool, Redux Dev
            tool etc.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
