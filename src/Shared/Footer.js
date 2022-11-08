import React from "react";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className="bg-gray-900 text-center lg:text-left mt-20">
      <div
        className="text-gray-300 flex justify-around  items-center p-4 text-cyan-300"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="m-0 text-center">
          Copyright &copy;
          <span>
            {" "}
            {getYear()}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/MajharulTanvir.rgt/"
            >
              Made By Myjharul Tanvir🔥
            </a>{" "}
          </span>
        </p>
        <div>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/MajharulTanvir.rgt/"
              className="text-3xl md:text-4xl"
            >
              <FaFacebookSquare className="my-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/majharul-tanvir-rgt/"
              className="text-3xl md:text-4xl"
            >
              <FaLinkedin className="my-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Rgt-Tanvir"
              className="text-3xl md:text-4xl"
            >
              <FaGithubSquare className="my-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
