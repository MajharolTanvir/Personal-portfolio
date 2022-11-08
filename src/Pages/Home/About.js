import React from "react";
import banner from "../../Utilities/pic/DSC_3583.JPG";
import { AiFillCaretRight } from "react-icons/ai";

const About = () => {
  return (
    <div id="about" className="container mx-auto mt-20">
      <div className="mb-10 flex justify-center items-center gap-2 text-cyan-300">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">About me</h4>
        <AiFillCaretRight />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="my-10 mx-10 p-10 border-2 relative border-gray-900 rounded-full shadow-md shadow-cyan-400">
          <img
            src={banner}
            className="w-full rounded-full border-4 border-cyan-300"
            alt=""
          />
        </div>

        <div className="text-center text-gray-300">
          <p className="px-10 text-justify">
            You know I am Majharul Tanvir from Rangamati. I am a 2nd-year
            Economics student at Rangamati Govt College. As a child I was very
            interested in "Computer Science", but unfortunately I could not
            study this subject due to some reasons.
          </p>
          <p className="px-10 pt-5 text-justify">
            In November 2020 I joined a Non-IT job. But always wished to work
            with computer related and I was so curious about Web development.
            That's why in September 2021 I joined a Web design Course. When I
            complete that course I gained WordPress and Html, Css Knowledge. I
            realized that I could make my career in the field.
          </p>
          <p className="px-10 pt-5 text-justify">
            I started web development in January 2022 and I resign from my job
            on February 2022. because I can't interested in that field. In 7-8+
            months of hard work am now well-versed in MERN-Stack Development. I
            used MERN-Stack technology to finish more than ten Full-Stack
            projects.
          </p>
          <p className="px-10 pt-5 text-justify">
            Now I focused to build up myself as a Full-Stack Developer. For this
            reason, I am continuing my learning. Also, I love to solve any type
            of coding problem and try to create unique UI designs. My other
            hobby is bike riding, swimming traveling, and playing badminton.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
