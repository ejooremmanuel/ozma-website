import React from "react";
import formBackground from "../assets/form-background.png";
import formImage from "../assets/formImage.png";
import detailImage from "../assets/detailImage.png";
import {
  IoArrowDownSharp,
  IoArrowForwardSharp,
  IoArrowUpSharp,
  IoCopySharp,
  IoEye,
  IoLaptopSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {};

const ITFooter = (props: Props) => {
  return (
    <div className="flex flex-col gap-[40px] py-[30px]">
      <div>
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Take the next step towards your career goals
        </div>
        <div className="lg:px-[80px] px-[15px] flex flex-col gap-8">
          <div>
            OZMA is one of the Leading Computer Training Institute in Warri
            Committed to Offering Top-Notch Training in Software, Hardware and
            Networking. We offer high-quality training opportunities to senior
            management personnel in various organizations.
          </div>
          <div
            style={{
              background: `url('${formBackground}')`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundSize: "cover",
              height: "100%",
            }}
            className="flex flex-col"
          >
            <div className="bg-[#e6e6e6]  grid lg:grid-cols-2 grid-cols-1 ">
              <div className="p-6 flex flex-col gap-3">
                <div className="font-[600]">
                  What is your highest educational qualification:
                </div>
                <div className="flex flex-col gap-2">
                  <div>Qualification</div>
                  <select
                    name=""
                    id=""
                    className="border-b border-[#7E7E7E] outline-none"
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <div>Select Course</div>
                  <select
                    name=""
                    id=""
                    className="border-b border-[#7E7E7E] outline-none"
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <div>Select Batch</div>
                  <select
                    name=""
                    id=""
                    className="border-b border-[#7E7E7E] outline-none"
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div className="bg-[#DCDCDC] p-6 flex flex-col gap-3 ">
                <div className="font-[600] ">Personal Details</div>
                <div className="flex flex-col gap-2">
                  <div>Name</div>
                  <input
                    type="text"
                    className="border-b border-[#7E7E7E] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>Gender</div>
                  <select
                    name=""
                    id=""
                    className="border-b border-[#7E7E7E] outline-none"
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <div>Email Address</div>
                  <input
                    type="text"
                    className="border-b border-[#7E7E7E] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>Phone Number</div>
                  <input
                    type="text"
                    className="border-b border-[#7E7E7E] outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-full py-6 cursor-pointer">
              <div className="flex gap-2 items-center bg-primaryColor px-2 py-3 justify-center text-white mx-auto w-[70%]">
                <IoArrowForwardSharp />
                <div>Proceed To Apply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Learn The Skills You Need To Succed
        </div>
        <div className="lg:px-[80px] px-[15px]">
          OZMA provides training and coaching services to individuals, staff,
          and management of government agencies, corporate bodies, private
          organizations, and undergraduate students. Our programs help identify
          areas for improvement and develop viable skill sets to enhance work
          performance, productivity, and efficiency.
        </div>
      </div>
      <div className="bg-[#e6e6e6] w-full grid grid-cols-2">
        <img
          src={formImage}
          alt=""
          className="object-contain w-full h-[750px]"
        />
        <div className="p-16 flex flex-col gap-3">
          <div className="text-[48px] font-[600]">
            Regular Students Programme
          </div>
          <div>
            Practical, hands-on, and customized computer training courses that
            improve the skills of participants – from beginners to advanced
            users. Our courses cater to a wide range of skill levels, ensuring
            that everyone can benefit from our training.
          </div>
          <div className="flex flex-col gap-6 p-8">
            <div className="border-[#7e7e7e] border bg-[#D9D9D9] w-3/6">
              {items.map((it, index) => (
                <div
                  className={`flex gap-2  p-3  w-full ${
                    index + 1 !== items.length
                      ? "border-b-[#7E7E7E] border"
                      : ""
                  }`}
                >
                  <IoArrowUpSharp
                    className="rotate-[36.37deg] inline text-primaryColor text-[15px]"
                    size={20}
                  />
                  <span className="text-[#4B4B4B] font-[600] whitespace-nowrap">
                    {it}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-primaryColor flex-shrink-0 h-[35px] w-[35px] flex items-center justify-center rounded-[100%] cursor-pointer">
                <IoCopySharp color="#fff" />
              </div>
              <div>
                <div className="font-[600]">Course Brochure</div>
                <div>Download pdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: `url('${detailImage}')`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "800px",
        }}
        className="flex flex-col relative pt-20 px-10 mt-20 gap-8"
      >
        <div className="absolute bg-[#00154C] p-3 text-center flex items-center gap-3 justify-center rounded-[7px] top-[-30px] w-[70%] right-[15%] cursor-pointer">
          <IoEye color="#fff" className="inline" />
          <div className="text-white">
            Click Here : To Download Our Admission Guidelines, Refund,
            Cancellation and Deferment Policy
          </div>
        </div>
        <div className="bg-primaryColor text-white p-8 grid lg:grid-cols-[1.5fr,1fr,1fr,.5fr] grid-cols-1 gap-4 relative">
          <div className="flex flex-col gap-3">
            <div className="text-[45px]">Ready To Make It Happen?</div>
            <div>Take the easy five steps to great transformation.</div>
          </div>
          <div className="border border-l-[#5C5C5C] border-r-0 border-t-0 border-b-0 text-white flex flex-col gap-4 p-4">
            <IoLaptopSharp size={48} />
            <div className="mt-auto">
              <div className="font-[600]">Step 4</div>
              <div className="my-2">Learn Course</div>
            </div>
          </div>
          <div className="border border-l-[#5C5C5C] border-r-0 border-t-0 border-b-0 flex flex-col gap-4 p-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.5 16.6613V10.5C43.5 9.70435 43.1839 8.94129 42.6213 8.37868C42.0587 7.81607 41.2957 7.5 40.5 7.5H7.5C6.70435 7.5 5.94129 7.81607 5.37868 8.37868C4.81607 8.94129 4.5 9.70435 4.5 10.5V34.5C4.5 35.2956 4.81607 36.0587 5.37868 36.6213C5.94129 37.1839 6.70435 37.5 7.5 37.5H28.5V42C28.4998 42.2558 28.5651 42.5074 28.6895 42.7309C28.814 42.9544 28.9936 43.1424 29.2112 43.2769C29.4287 43.4114 29.6771 43.4881 29.9327 43.4996C30.1882 43.511 30.4425 43.457 30.6713 43.3425L36 40.6763L41.3288 43.3425C41.5575 43.457 41.8118 43.511 42.0673 43.4996C42.3229 43.4881 42.5713 43.4114 42.7889 43.2769C43.0064 43.1424 43.186 42.9544 43.3105 42.7309C43.4349 42.5074 43.5002 42.2558 43.5 42V31.3387C45.4229 29.38 46.5002 26.7448 46.5002 24C46.5002 21.2552 45.4229 18.62 43.5 16.6613ZM24 27H13.5C13.1022 27 12.7206 26.842 12.4393 26.5607C12.158 26.2794 12 25.8978 12 25.5C12 25.1022 12.158 24.7206 12.4393 24.4393C12.7206 24.158 13.1022 24 13.5 24H24C24.3978 24 24.7794 24.158 25.0607 24.4393C25.342 24.7206 25.5 25.1022 25.5 25.5C25.5 25.8978 25.342 26.2794 25.0607 26.5607C24.7794 26.842 24.3978 27 24 27ZM24 21H13.5C13.1022 21 12.7206 20.842 12.4393 20.5607C12.158 20.2794 12 19.8978 12 19.5C12 19.1022 12.158 18.7206 12.4393 18.4393C12.7206 18.158 13.1022 18 13.5 18H24C24.3978 18 24.7794 18.158 25.0607 18.4393C25.342 18.7206 25.5 19.1022 25.5 19.5C25.5 19.8978 25.342 20.2794 25.0607 20.5607C24.7794 20.842 24.3978 21 24 21ZM40.5 39.5737L36.6713 37.6575C36.4629 37.5532 36.233 37.4989 36 37.4989C35.767 37.4989 35.5371 37.5532 35.3288 37.6575L31.5 39.5737V33.4856C32.9061 34.1535 34.4433 34.5 36 34.5C37.5567 34.5 39.0939 34.1535 40.5 33.4856V39.5737ZM36 31.5C34.5166 31.5 33.0666 31.0601 31.8332 30.236C30.5999 29.4119 29.6386 28.2406 29.0709 26.8701C28.5032 25.4997 28.3547 23.9917 28.6441 22.5368C28.9335 21.082 29.6478 19.7456 30.6967 18.6967C31.7456 17.6478 33.082 16.9335 34.5368 16.6441C35.9917 16.3547 37.4997 16.5032 38.8701 17.0709C40.2406 17.6386 41.4119 18.5999 42.236 19.8332C43.0601 21.0666 43.5 22.5166 43.5 24C43.5 25.9891 42.7098 27.8968 41.3033 29.3033C39.8968 30.7098 37.9891 31.5 36 31.5Z"
                fill="white"
              />
            </svg>

            <div className="mt-auto">
              <div className="font-[600]">Step 4</div>
              <div className="my-2">Learn Course</div>
            </div>
          </div>
          <div className="border border-l-[#5C5C5C] flex flex-col gap-6 p-4 border-r-0 border-t-0 border-b-0">
            <IoArrowUpSharp />
            <div className="flex flex-col gap-2">
              {steps.map((it) => (
                <div className="w-[20px] h-[20px] border border-[#5C5C5C] rounded-[100%]"></div>
              ))}
            </div>
            <IoArrowDownSharp />
          </div>
        </div>
        <div className=" relative bg-primaryColor text-white p-8 flex gap-4 flex-wrap justify-between items-center mt-auto">
          <div>Register!...for {new Date().getFullYear()} Session...</div>
          <Link to="" className="bg-white p-3 text-black">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITFooter;

const items = [
  "One on One Training",
  "Class Room Training",
  "Weekend Classes",
  "Virtual Classes",
];

const steps = [
  {
    icon: <IoLaptopSharp />,
  },
  {
    icon: <IoLaptopSharp />,
  },
  {
    icon: <IoLaptopSharp />,
  },
];
