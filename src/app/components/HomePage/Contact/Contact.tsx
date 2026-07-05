import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdMailUnread } from "react-icons/io";

const ContactMe = () => {
  const handleFormMessage=async(e: { preventDefault: () => void; target: any; })=>{
    e.preventDefault()
    const form =e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData)

      console.log(data);

          const response = await axios.post('https://my-portfolio-server-neon.vercel.app/form-message', data);
    if(response) {
      return toast.success(`Message Sent SuccessFully!.`, {
          className: "w-[300px] h-[100px] text-xl font-bold ",
          removeDelay: 1000,
          iconTheme: {
            primary: "#c4cfd2",
            secondary: "#14ff3d",
          },
          style: {
            border: "1px solid #08086c",
            color: "black",
            backgroundImage: "linear-gradient(to bottom right, #13ff3d ,#14ff3d)"
          },
        });
    }
  }


  return (
    <div id="contact" className="px-3 lg:px-3 xl:px-0 border-t border-primary-text flex  flex-col lg:flex-row gap-3 md:gap-6 container mx-auto py-24 md:py-32 xl:py-36">
      
      <div className="cnts flex-1  w-full">
        <h6 className="text-center lg:text-left  mb-3 text-sm md:text-xl text-[#13ff3d] montserrat ">
          CONTACT ME
        </h6>
        <h1 className="text-center lg:text-left montserrat text-2xl md:text-4xl lg:text-5xl text-primary-text font-bold">
          Got a Project? Let’s Chat!
        </h1>
        <p className="mt-6 md:mt-12 text-center lg:text-left poppins text-primary-text text-[17px] md:text-xl">
          Whether you have a question, project idea, or want to connect — I'm
          always open to meaningful conversations.
        </p>
        <div className="flex items-center flex-col md:flex-row gap-6 mt-12">
          <span className=" inline-flex items-center justify-center md:p-4 lg:p-5 p-3 md:rounded-xl rounded-md bg-gradient-to-br from-[#13ff3d30] to-[#23272b] shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-white text-2xl transition duration-300 hover:bg-gradient-to-br hover:from-[#2a2f37] hover:to-[#353c46] hover:text-[#13ff3d] ">
            <GrLocation />
          </span>
          <div>
            <h6 className="text-center md:text-left text-sm mb-2 text-[#13ff3d] montserrat ">
              LOCATION
            </h6>
            <h1 className="text-center md:text-left montserrat text-xl md:text-2xl text-primary-text font-bold">
              Jashore,Khulna,Bangladesh.
            </h1>
          </div>
        </div>
        {/* number */}
        <div className="flex items-center flex-col md:flex-row gap-6 mt-12">
          <span className=" inline-flex items-center justify-center md:p-4 lg:p-5 p-3 md:rounded-xl rounded-md bg-gradient-to-br from-[#13ff3d30] to-[#23272b] shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-white text-2xl transition duration-300 hover:bg-gradient-to-br hover:from-[#2a2f37] hover:to-[#353c46] hover:text-[#13ff3d] ">
            <FaPhoneAlt />
          </span>
          <div>
            <h6 className="text-center md:text-left text-sm mb-2 text-[#13ff3d] montserrat ">
              WHATSAPP
            </h6>
            <h1 className="text-center md:text-left montserrat text-xl md:text-2xl text-primary-text font-bold">
              +8801904240740
            </h1>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-center flex-col md:flex-row gap-6 mt-12">
          <span className=" inline-flex items-center justify-center md:p-4 lg:p-5 p-3 md:rounded-xl rounded-md bg-gradient-to-br from-[#13ff3d30] to-[#23272b] shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e] text-white text-2xl transition duration-300 hover:bg-gradient-to-br hover:from-[#2a2f37] hover:to-[#353c46] hover:text-[#13ff3d] ">
            <IoMdMailUnread />
          </span>
          <div>
            <h6 className="text-center md:text-left text-sm mb-2 text-[#13ff3d] montserrat ">
              E-Mail
            </h6>
            <h1 className="text-center md:text-left montserrat md:text-xl lg:text-2xl text-primary-text font-bold">
              mdkhalidhossain5000@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0 fromssss  shadow-[#c4cfde60] hover:shadow-xl hover:shadow-[#c4cfde20] transition-shadow duration-300 bg-gradient-to-br from-[#1e2024] to-[#08080890] flex-1 p-5 md:p-8">
        <form onSubmit={handleFormMessage}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="text-[#a0a8b3] montserrat mb-3 md:mb-4 uppercase">
                Enter Your Name
              </p>
              <input
                style={{
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                }}
                className="w-full bg-[#191b1e] rounded-md h-14 border-2 border-[#191b1e] px-4 focus:border-[#13ff3d] focus:border-1 focus:outline-none text-white"
                type="name"
                placeholder="name"
                name="name"
              />
            </div>

            <div className="flex-1">
              <p className="text-[#a0a8b3] montserrat mb-3 md:mb-4 uppercase">
                Subject
              </p>
              <input
                style={{
                  boxShadow:
                    "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
                }}
                className="w-full bg-[#191b1e] rounded-md h-14 border-2 border-[#191b1e] px-4 focus:border-[#13ff3d] focus:border-1 focus:outline-none text-white"
                type="subject"
                placeholder="Subject"
                name="subject"
              />
            </div>
          </div>
          <p className="text-[#a0a8b3] montserrat mb-3 md:mb-4 uppercase">
            Your Email <span className="text-red-600">*</span>
          </p>
          <input
            style={{
              boxShadow:
                "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
            }}
            className="w-full bg-[#191b1e] rounded-md h-14 border-2 border-[#191b1e] px-4 focus:border-[#13ff3d] focus:border-1 focus:outline-none text-white"
            type="email"
            placeholder="Your Email"
            required
            name="email"
          />
          <p className="pt-3 text-[#a0a8b3] montserrat mb-3 md:mb-4 uppercase">
            Your Message <span className="text-red-600">*</span>
          </p>
          <textarea
            style={{
              boxShadow:
                "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
            }}
            className="my-2 w-full bg-[#191b1e] rounded-md  border-2 border-[#191b1e] px-4 focus:border-[#13ff3d] focus:border-1 focus:outline-none text-white"
            name="message"
            rows={`6`}
            id=""
            placeholder="Message"
            required
            
          ></textarea>
          <div className="mt-6 md:mt-9 lg:mt-12 ">
            <button
              type="submit"
              className="w-full my-2 md:my-0 text-sm text-black bg-[#13ff3d] py-3 px-5 sm:py-3 sm:px-5 rounded-full lg:text-xl font-bold cursor-pointer transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text form-control" id="contact-phone" aria-invalid="false" value="" type="text" name="your-phone">
export default ContactMe;
