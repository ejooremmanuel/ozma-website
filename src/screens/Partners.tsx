import React from "react";
import partners from "../assets/partners.png";
import nsitu from "../assets/insitu.png";
import amusement from "../assets/amusement.png";
import nueva from "../assets/nueva.png";
import aisten from "../assets/aisten.png";
import gammatec from "../assets/gammatec.png";
import { Link } from "react-router-dom";
type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col lg:gap-[40px] gap-[20px]">
      <div
        className="w-full lg:px-[80px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
        style={{
          background: `url('${partners}')`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <h1 className="text-[38px] font-[600]">
          Our <span className="text-primaryColor">Partners</span>
        </h1>
        <div className=" lg:w-[60%] w-[90%] leading-8">
          We leverage on partnerships with other leading companies and
          organizations to further our mission and ensure excellence in our
          service delivery to all our clients. The strength of our partnerships
          has helped up to ensure maximum value delivery on all our solutions
          and services. Some of our partners are:
        </div>
      </div>
      <div className="lg:px-[80px] px-[15px] py-[30px]">
        {partnersList?.map((it) => (
          <div className="flex flex-col">
            <img
              src={it.img}
              alt=""
              className="justify-self-center w-[400px] h-[200px] object-contain shrink-0 mx-auto"
            />
            <div>{it?.text}</div>
            <Link
              to="/about"
              className="text-decoration-none text-primaryColor p-3 border-primaryColor border lg:w-1/6 w-3/6 text-center rounded-[5px] my-4"
            >
              View Catalogue
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

const partnersList = [
  {
    img: aisten,
    slug: "aisten",
    text: "AISTEIN. S.L located in Valencia – Spain offers a system of industrial insulation based on the use of the Polyisocyanurate panel they manufacture which is use for building warehouses, cold rooms, modular houses, fridge panel etc. Aistein Group offers personalized designs for each customer. Aistein Group offers as a novelty to its range MODULAR HOUSES, straight from the factory with its revolutionary new insulating panels, specially designed for demanding atmospheres needing thermic control. Aistein group offers to build houses that save a considerable amount of energy.",
  },
  {
    img: nueva,
    slug: "nueva",
    text: "NUEVA TERRAIN S.L located in Bilbao – Spain manufactures and supplies cold and hot water supply piping system made with polybutylene (FB) & PVC sound proved drainage system for soil and waste water inside building. Nueva Terrain offers a professional system for plumbing and heating installations like Pushfit system, Soundproof system, Electro Fusion, Socket Fusion and Butt Welding System, PVC Parts and Accessories .",
  },
  {
    img: amusement,
    slug: "amusement",
    text: "AMUSEMENT LOGIC a company located in Valencia – Spain offers the widest range of specialized services and products for the leisure industry and is known today as one of the leading companies in the sector. Amusement Logic is specialized in the worldwide design, planning, development and construction of all types of leisure and tourist complexes, including those that are “turnkey” and we are capable of developing any kind of leisure project, regardless of its size, complexity and nature. With a multidiscipline team of engineers, architects, consultants and artists from different specialties, Amusement Logic creates complete solutions for hotel complexes, sports facilities, theming and decoration projects, amusement parks and tourist and leisure complexes.Amusement Logic´s services range from the initial design of an idea, to the execution and management of a project. In parallel, Amusement Logic also offers its consultant specialists’ knowledge, in the optimization of leisure investment profitability and in the training of future project operators",
  },
  {
    img: nsitu,
    slug: "nsitu",
    text: "OZMA NIGERIA COMPANY LIMITED in collaboration with INSTITU REMEDATION SERVICE LIMITED have designed, implemented, and maintained soil and ground water remediation programs in diverse geological environment. In remediating Petroleum Hydrocarbon Impacts, we offer service INSITU-REMEDIATION,EXSITU-REMEDIATION and REMEDIATION SUPPORT SERVICES.",
  },
];
