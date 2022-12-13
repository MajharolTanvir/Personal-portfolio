import React from "react";
import Frontend from "../../Utilities/work/frontend.png";
import Backend from "../../Utilities/work/backend.png";
import Wordpress from "../../Utilities/work/wordpress.png";
import { AiFillCaretRight } from "react-icons/ai";

const WorkDetails = () => {
  return (
    <div id="service" className="container mx-auto mt-20">
      <div className="mx-5 md:mx-0">
        <div className=" mb-10 flex justify-center items-center gap-2 text-cyan-300">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
            My services
          </h4>
          <AiFillCaretRight />
        </div>
        <div className="rounded-lg bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
            <div className="block p-6 text-cyan-300 rounded-lg shadow-md bg-gray-900 max-w-sm shadow-cyan-300">
              <img className="h-48 w-full rounded" src={Frontend} alt="" />
              <h5 className="mt-3 text-xl leading-tight font-semibold mb-2">
                Frontend developer
              </h5>
              <p>
                Html, Css, Bootstrap, Tailwind, Javascript, React, TypeScript,
                Redux, DaisyUI, ANT design.
              </p>
            </div>
            <div className="block p-6 text-cyan-300 rounded-lg shadow-md bg-gray-900 max-w-sm shadow-cyan-300">
              <img className="h-48 w-full rounded" src={Backend} alt="" />
              <h5 className="mt-3 text-xl leading-tight font-semibold mb-2">
                Backend developer
              </h5>
              <p className="text-cyan-300 text-base mb-4">
                Node.js, Express.js, MongoDB, FireStore.
              </p>
            </div>
            <div className="block p-6 rounded-lg text-cyan-300 shadow-md bg-gray-900 max-w-sm shadow-cyan-300">
              <img className="h-48 w-full rounded" src={Wordpress} alt="" />
              <h5 className="mt-3 text-xl leading-tight font-semibold mb-2">
                WordPress developer
              </h5>
              <p className="text-cyan-300 text-base mb-4">
                WordPress with Elementor , so many Theme, Plugin and Templates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
