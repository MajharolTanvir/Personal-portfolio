import React from "react";
import image from "../../Utilities/about/animation_500_l48kv2qd.gif";
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Jr. Web Developer",
  "Front-End Developer",
  "MERN-Stack Developer",
  "WordPress Developer",
];

const Header = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="md:pt-5 lg:pt-10 top-0 -z-10 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full">
          <div className="text-center md:text-left text-cyan-300 px-6 md:px-12">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-0 mb-3">
              I'm Majharul Tanvir
            </h1>
            <h3 className="flex justify-center md:justify-start text-lg md:text-xl lg:text-3xl font-bold mb-5">
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
              />
            </h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/MajharolTanvir"
                className="text-3xl md:text-4xl"
              >
                <FaFacebookSquare className="my-2" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/majharoltanvir/"
                className="text-3xl md:text-4xl"
              >
                <FaLinkedin className="my-2" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MajharolTanvir"
                className="text-3xl md:text-4xl"
              >
                <FaGithubSquare className="my-2" />
              </a>
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1sFDd5WN2Gua3G714K2PSGngvXG3BPaRn/view?usp=sharing"
            >
              <button
                type="button"
                className="inline-block my-5 px-6 py-2.5 border-2 border-cyan-300 text-cyan-300 hover:text-gray-900 font-bold text-xs leading-tight uppercase rounded hover:bg-cyan-300 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                My resume
              </button>
            </a>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
