import React from "react";
import bg1 from "../assets/homeHero.png";
import imgSection1 from "../assets/heroSection1.png";
import whatWedo1 from "../assets/whatwedo1.png";
import whatWedo2 from "../assets/whatwedo2.png";
import whatWedo3 from "../assets/whatwedo3.png";
import chevron from "../assets/chevron.png";
import pillaroil from "../assets/pillaroil.png";
import seplat from "../assets/seplat.png";
import addax from "../assets/addax.png";
import mobil from "../assets/mobil.png";
import lee from "../assets/lee.png";
import oilserv from "../assets/oilserve.png";
import makon from "../assets/makon.png";
import adano from "../assets/adano.png";
import shell from "../assets/shell.png";
import npdc from "../assets/nnpc.png";
import nsitu from "../assets/insitu.png";
import amusement from "../assets/amusement.png";
import nueva from "../assets/nueva.png";
import aisten from "../assets/aisten.png";
import gammatec from "../assets/gammatec.png";
import story from "../assets/story.png";

import { Link } from "react-router-dom";

type Props = {};

const images = [bg1, imgSection1];
const Home = (props: Props) => {
  const [current, setCurrent] = React.useState(0);
  const length = images?.length;
  const timeout = React.useRef<any>(null);

  React.useEffect(() => {
    const nextSlider = () => {
      length > 0
        ? setCurrent((current) => (current === length - 1 ? 0 : current + 1))
        : setCurrent(0);
    };
    timeout.current = setTimeout(nextSlider, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <div className="flex flex-col lg:gap-20 gap-7 w-full h-full">
      <div className="relative w-full">
        <div className="h-[450px] w-full relative">
          <img
            src={images[current]}
            alt=""
            className="object-cover h-full w-full transition-all"
          />
        </div>
        <div className="absolute lg:left-[80px] left-[15px] lg:top-[80px] top-[20px] text-white font-[600]">
          <h1 className="lg:text-[38px] text-[30px]">
            Our Hardwork <span className="text-primaryColor">Made us</span>
          </h1>
          <div className="llg:my-8 my-3 lg:w-[60%] leading-8">
            Gold category in International Quality Crown Award for quality
            services delivery (LONDON 2014) by the Business Initiative Direction
            and Gold Category in Century International Quality Era Award for
            quality services delivery (GENEVA 2014) by the Business Initiative
            Direction
          </div>
        </div>
        <div className="flex gap-4 absolute py-5 lg:left-[80px] left-[15px] lg:bottom-[60px] bottom-[-4px]">
          {images?.map((it, index) => (
            <div
              onClick={() => {
                setCurrent(index);
              }}
              className={`shrink-0 w-4 h-4 rounded-[100%] cursor-pointer ${
                index === current ? "bg-primaryColor" : "bg-[#e6e6e6]"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 grid-cols-1 relative lg:px-[80px] px-[15px]">
        <img src={imgSection1} alt="" className="object-cover" />
        <div className="flex flex-col gap-3">
          <div className="text-primaryColor text-[30px] font-[600]">
            Welcome to OZMA
          </div>
          <div className="font-[600]">
            At OZMA Nigeria Company Limited, our work is never complete without
            the final nod of approval from our clients.
          </div>
          <div>
            Projects are processed through stringent quality control measures
            and only after tedious inspection and tests is the project handed
            over to the client. We are committed to our client’s satisfaction
            and approval.
          </div>
          <Link
            to="/about"
            className="text-decoration-none text-white p-3 bg-primaryColor lg:w-2/6 w-3/6 my-8 text-center rounded-[5px]"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          What we do
        </div>
        <div className="text-center lg:px-[200px] px-[30px]">
          Over the years, the company has been involved in offering broad
          spectrum of general engineering and related services to Multinational
          Companies, Industrial Groups and Private clients. Our services are
          grouped into various job groups which are
        </div>
        <div className="bg-[#e6e6e6] lg:py-[80px] py-[25px] gap-[20px] grid lg:grid-cols-3 grid-cols-1 lg:px-[200px] px-[30px]">
          {whatWeDo?.map((it) => (
            <div className="grid grid-cols-1 gap-3 w-full">
              <img src={it?.img} alt="" className="object-cover h-[280px] " />
              <div className="font-[600]">{it.title}</div>
              <div className="h-[150px] overflow-hidden text-ellipsis w-full">
                {it.text}
              </div>
              <Link
                to="/about"
                className="text-decoration-none text-white flex justify-center items-center bg-primaryColor w-3/6  rounded-[5px] h-[40px]"
              >
                Read More...
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Our Major Clients
        </div>
        <div className="text-center lg:px-[200px] px-[30px]">
          We work closely with a wide range of clients from different sectors
          and regions across public sector, private sector and local and
          national governments. These are just some of the people we have worked
          with:
        </div>
        <div className="py-[20px] gap-[10px] flex flex-wrap lg:px-[200px] px-[30px] justify-center pb-[80px]">
          {clients.map((it) => (
            <img src={it} alt="" className="h-[60px]" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Our Partners
        </div>
        <div className="text-center lg:px-[200px] px-[30px]">
          We leverage on partnerships with other leading companies and
          organizations to further our mission and ensure excellence in our
          service delivery to all our clients. The strength of our partnerships
          has helped up to ensure maximum value delivery on all our solutions
          and services. Some of our partners are:
        </div>
        <div className="py-[20px] gap-[10px] flex flex-wrap lg:px-[250px] px-[40px] justify-center pb-[80px]">
          {partners.map((it) => (
            <img src={it} alt="" className="h-[60px]" />
          ))}
        </div>
      </div>
      <div className="w-full">
        <div
          className="w-full lg:px-[80px] lg:h-[500px] h-[600px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
          style={{
            background: `url('${story}')`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            // height: "500px",
          }}
        >
          <div className="text-[30px] font-[600]">
            WE BELIEVE SAFETY IS NOT BY ACCIDENT
          </div>
          <div className="lg:w-[70%] w-[90%]">
            The Ozma HSE management system is committed to the promotion of
            health, safety and protection of environment in all of its influence
            and subscribes to the philosophy that all accident are preventable
            that safety behaviour becomes the organization paramount interest
            and addicted way of living to meet the target of goal Zero free
            accident
          </div>
          <Link
            to="/hse"
            className="text-decoration-none text-primaryColor p-3 bg-white lg:w-1/6 w-3/6 lg:mt-8 mt-3 text-center rounded-[5px] font-[600]"
          >
            Read More...
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-24 gap-6 lg:px-[80px] px-[15px] lg:py-[80px] py-[20px]">
          <div className="flex gap-4 flex-col">
            <div className="py-4 border-b border-[#000]  text-[28px] font-[600]">
              Professional Membership
            </div>
            <div className="flex flex-col gap-6 lg:px-0 px-4">
              <ul className="list-disc">
                <li>Nigeria Institute of Welding (NIW)</li>
                <li>Nigeria Institute of Safety Professionals (NISP)</li>
                <li>American Society of Non-Destructive Testing (ASNT)</li>
                <li>British Safety Council (BSC)</li>
                <li>Business Initiative Directions (BID)</li>
                <li>
                  Human Capital Providers Association of Nigeria (HuCaPAN)
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="py-4 border-b border-[#000]  text-[28px] font-[600]">
              Registration & Affliation
            </div>
            <div className="flex flex-col gap-6 lg:px-0 px-4">
              <ul className="list-disc">
                <li>British Safety Council (BSC).</li>
                <li> Corporate Affairs Commission of Nigeria(CAC)</li>
                <li>
                  Nigeria Nuclear Regulation Authority(NNRA) Federal Inland
                  Revenue Service (FIRS)
                </li>
                <li>
                  ISO certification 2001-2008 with Standard Organization of
                  Nigeria (SON).
                </li>
                <li>
                  National Oil Spill and Detection and Response Agency (NOSDRA)
                </li>
                <li>
                  Human Capital Providers Association of Nigeria (HuCaPAN)
                </li>
                <li>Nigerian Maritime Administration Safety Agency (NIMASA)</li>
                <li>
                  Federal Ministry of Environment Nigeria National Petroleum
                  Corporation (NNPC)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const whatWeDo = [
  {
    title: "Manpower Support Services",
    img: whatWedo1,
    text: "We provide well trained and skillful personnels to manned your project. Our personnels includes inspectors (Civil, Electrical & Mechanicals), Radiographers, Welders, Filters, Riggers and lot more",
  },
  {
    title: "QAQC Inspection Services",
    img: whatWedo2,
    text: "We carry out advance quality inspection services for our clients with the aim of conforming to clients requirements only at an affordable cost.",
  },
  {
    title: "Engineering Services",
    img: whatWedo3,
    text: "Our Engineering Services Department is built on the reputation of our team of specialist engineers.",
  },
];

const clients = [
  chevron,
  pillaroil,
  seplat,
  addax,
  mobil,
  lee,
  oilserv,
  makon,
  adano,
  shell,
  npdc,
];

const partners = [nsitu, amusement, nueva, aisten, gammatec];
