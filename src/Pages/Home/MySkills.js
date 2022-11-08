import React from "react";
import { AiFillCaretRight, AiOutlineAntDesign } from "react-icons/ai";
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNode,
  FaReacteurope,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiJest,
  SiStripe,
  SiGithub,
  SiNetlify,
  SiHeroku,
  SiPostman,
} from "react-icons/si";

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly items-center gap-5">
            <FaHtml5 className="text-4xl mx-auto" />
            <FaCss3Alt className="text-4xl mx-auto " />
            <SiTailwindcss className="text-4xl mx-auto " />
            <SiBootstrap className="text-4xl mx-auto " />
            <FaJava className="text-4xl mx-auto " />
            <FaReacteurope className="text-4xl mx-auto " />
            <SiTypescript className="text-4xl mx-auto " />
            <SiFirebase className="text-4xl mx-auto " />
          </div>
        </div>
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Comfortable</h6>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly items-center gap-5">
            <FaNode className="text-4xl mx-auto" />
            <SiExpress className="text-4xl mx-auto " />
            <SiMongodb className="text-4xl mx-auto " />
            <AiOutlineAntDesign className="text-4xl mx-auto " />
            <FaWordpress className="text-4xl mx-auto " />
          </div>
        </div>
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Familiar</h6>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly items-center gap-5">
            <SiRedux className="text-4xl mx-auto" />
            <SiNextdotjs className="text-4xl mx-auto " />
            <TbBrandReactNative className="text-4xl mx-auto " />
            <SiJest className="text-4xl mx-auto " />
            <SiStripe className="text-4xl mx-auto " />
          </div>
        </div>
        <div className="p-5 lg:p-8 border-2 border-cyan-300 rounded-lg">
          <h6 className="font-bold pb-3">Tools</h6>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly items-center gap-5">
            <SiGithub className="text-4xl mx-auto" />
            <SiNetlify className="text-4xl mx-auto " />
            <SiHeroku className="text-4xl mx-auto " />
            <SiPostman className="text-4xl mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
