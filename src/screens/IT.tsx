import React from "react";
import { IoArrowUpSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {};

const IT = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col lg:gap-[40px] gap-[20px]">
      <div
        className="w-full lg:px-[80px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
        style={{
          width: "100%",
          height: "700px",
        }}
      >
        <div className="grid grid-cols-2 justify-between w-full">
          <div className="bg-[#FA873E] p-3 rotate-[1.34deg] h-[260px] w-[400px]">
            <div className="rotate-[-1.34deg]">OZMA DIGITAL DRIVING GROWTH</div>
            <div className="py-2 font-[700] text-[30px] mb-3">
              Discover the power of ozma products and service today....
            </div>
            <Link
              to=""
              className="bg-white text-primaryColor rounded-md p-3 rotate-[-1.34deg]"
            >
              Learn More
            </Link>
          </div>
          <div></div>
        </div>
        <div className="text-white bg-primaryColor rounded-[100px] p-3 w-1/6">
          <span>Browse Our Live Course</span>&nbsp;
          <IoArrowUpSharp color="#fff" className="rotate-[37.13deg] inline" />
        </div>
        <div className=" lg:w-[60%] w-[90%] leading-8 font-[600] text-black">
          OZMA IS A LEADING IT SERVICES AND CONSULTING COMPANY IN Delta State,
          NIGERIA. WE PROVIDE SOLUTIONS AND SERVICES ACROSS APPLICATION AND
          TECHNOLOGY MODERNIZATION, CLOUD ENABLEMENT, APPLICATION DEVELOPMENT,
          CYBER SECURITY, DATA MANAGEMENT, CONSULTING SERVICES AND SUPPORT.
        </div>
      </div>
    </div>
  );
};

export default IT;
