import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import image from "../../Utilities/about/animation_500_l48va9oi.gif";
import { AiFillCaretRight } from "react-icons/ai";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gf02ufa",
        "template_9h0nh3o",
        form.current,
        "sE1TsmGycp0fjGGW1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your email send successfully");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div id="contact" className="text-cyan-300 mt-20">
      <div className="text-center mb-10 ">
        <div className="flex justify-center items-center gap-2">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
            My Latest Project
          </h4>
          <AiFillCaretRight />
        </div>
        <p className="px-10">
          If you have any questions, please feel free to contact me or you can
          contact me using other social media.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 md:px-0">
        <div className="flex justify-center items-center my-10 md:my-0">
          <img className="h-80" src={image} alt="" />
        </div>
        <div className="block p-6 rounded-lg shadow-md shadow-cyan-300 max-w-md">
          <form ref={form} onSubmit={sendEmail}>
            <label className="text-cyan-300">Name</label>
            <input
              type="text"
              name="user_name"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-300 bg-gray-900 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-300 focus:border-cyan-300 focus:outline-none"
              required
            />
            <label className="text-cyan-300">Email</label>
            <input
              type="email"
              name="user_email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-300 bg-gray-900 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-300 focus:border-cyan-300 focus:outline-none"
              required
            />
            <label className="text-cyan-300">Message</label>
            <textarea
              name="message"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-300 bg-gray-900 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-300  focus:border-cyan-300 focus:outline-none"
            />
            <input
              type="submit"
              value="Send"
              className="w-full px-6 py-2.5 bg-transparent border border-cyan-300 hover:text-black text-cyan-300 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-300 hover:shadow-lg focus:bg-cyan-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-300 active:shadow-lg transition duration-150 ease-in-out mt-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
