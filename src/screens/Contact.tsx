import React from "react";
import contact from "../assets/contact.png";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-[#e6e6e6] px-[15px] lg:px-[80px]  w-full flex flex-col gap-6 py-[40px]">
      <div className="text-primaryColor text-[30px] font-[600] py-10">
        Contact Us
      </div>
      <div className="relative h-[800px] lg:w-6/12 w-full flex lg:flex-row flex-col">
        <img
          src={contact}
          alt=""
          className="h-full object-cover rounded-md w-full hidden lg:block"
        />
        <div className="lg:absolute h-full lg:bg-[#e6e6e6] lg:left-[90%] lg:w-[90%] w-full lg:shadow-lg lg:top-[20px] rounded-[20px] lg:p-[30px] px-[15px] py-[20px] flex flex-col gap-6">
          <div>
            <div>Name</div>
            <input
              type="text"
              className="w-full border-[2px] border-[#585858] bg-transparent p-2 rounded-md"
            />
          </div>
          <div>
            <div>Email</div>
            <input
              type="text"
              className="w-full border-[2px] border-[#585858] bg-transparent p-2 rounded-md"
            />
          </div>
          <div>
            <div>Phone Number</div>
            <input
              type="text"
              className="w-full border-[2px] border-[#585858] bg-transparent p-2 outline-none rounded-md"
            />
          </div>
          <div>
            <div>Message</div>
            <input
              type="text"
              className="w-full border-[2px] border-[#585858] bg-transparent p-2 h-[200px] outline-none rounded-md"
            />
          </div>
          <button className="justify-self-end bg-primaryColor p-3 rounded-md outline-none border-none text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
