import React from "react";
import { IoArrowForwardSharp, IoArrowUpSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import itImage2 from "../assets/it_image_2.png";
import { itServices } from "../it-services";
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
        <div className="grid lg:grid-cols-2 justify-between w-full grid-cols-1 gap-3">
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
          <div
            className="w-full"
            style={{
              background: `url('${itImage2}')`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundSize: "contain",
              height: "100%",
            }}
          />
        </div>
        <div className="text-white bg-primaryColor rounded-[100px] p-3 lg:w-1/6 w-5/6">
          <span className="whitespace-nowrap">Browse Our Live Course</span>
          &nbsp;
          <IoArrowUpSharp color="#fff" className="rotate-[37.13deg] inline" />
        </div>
        <div className=" lg:w-[60%] w-[90%] leading-8 font-[600] text-black">
          OZMA IS A LEADING IT SERVICES AND CONSULTING COMPANY IN Delta State,
          NIGERIA. WE PROVIDE SOLUTIONS AND SERVICES ACROSS APPLICATION AND
          TECHNOLOGY MODERNIZATION, CLOUD ENABLEMENT, APPLICATION DEVELOPMENT,
          CYBER SECURITY, DATA MANAGEMENT, CONSULTING SERVICES AND SUPPORT.
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="text-center text-primaryColor text-[30px] font-[600] lg:px-[80px] px-[15px]">
          Products / Services
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pb-6 w-full h-full bg-[#e6e6e6] lg:px-[80px] px-[15px] py-[40px]">
          {itServices?.map((it) => (
            <div className="p-3 flex flex-col gap-2 justify-center items-center bg-white rounded-md w-full">
              <img src={it.thumb} alt="" className="w-full" />
              <div className="py-2 font-[600]">{it.thumbTitle}</div>
              <Link
                className="p-2 bg-primaryColor text-white rounded-sm lg:w-2/6 w-5/6 lg:justify-start justify-center flex items-center"
                to={`${it.slug}`}
              >
                <IoArrowForwardSharp className="inline text-white" />
                &nbsp;
                <span>Learn More...</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <div className="text-center text-primaryColor text-[30px] font-[600] lg:px-[80px] px-[15px]">
          Featured Services
        </div>
        <div className="pb-6 w-full h-full lg:px-[80px] px-[15px]">
          We support business intelligence, architecture, enterprise quality,
          content management, integration, enterprise application integration,
          quality assurance services, and web applications. Our Experts
          developers provide the best and complete solutions for websites that
          represents your business in the global market with the user-friendly
          interface, engaging, functional, interactive and creative designs.
        </div>
      </div>
    </div>
  );
};

export default IT;
