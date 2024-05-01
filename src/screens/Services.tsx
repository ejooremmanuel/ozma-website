import React from "react";
import service from "../assets/services.png";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import image4 from "../assets/image 4.png";
type Props = {};

const Services = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col lg:gap-[40px] gap-[20px]">
      <div
        className="w-full lg:px-[80px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
        style={{
          background: `url('${service}')`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <h1 className="text-[38px] font-[600]">
          Our <span className="text-primaryColor">Service</span>
        </h1>
        <div className=" lg:w-[60%] w-[90%] leading-8">
          We believe quality is everyone’s responsibility Thus all staff are
          inducted thoroughly on quality service delivery
        </div>
      </div>
      <div className="lg:px-[80px] px-[15px] lg:py-[40px] py-[20px]">
        <div className="grid lg:grid-cols-[1fr,350px] grid-cols-1 lg:justify-between  gap-3">
          <div className="w-full flex-col justify-between">
            <div className="font-[600] lg:w-[70%] w-full h-full">
              Over the years, the company has been involved in offering broad
              spectrum of general engineering and related services to
              Multinational Companies, Industrial Groups and Private clients.
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="bg-[#596cb3] font-[600] text-[16px] py-[20px] text-white px-4">
              Our Equipment
            </div>
            <div className="p-4 bg-[#e6e6e6] h-[250px]">
              In addition to skilled and experienced operators, good equipment
              are necessary for efficiency in project execution. OZMA has
              sufficient experience in the selection of equipment most suitable
              for their requirements of reliable and prompt on-site project
              works in view of clients demand. To see our equipment&nbsp;
              <a href="/equipemnt" className="font-[600]">
                click here
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-[85%] w-full">
          <div>
            Our services are grouped into various job groups which are:-
          </div>
          <div className="p-3 bg-[#e6e6e6] font-[600]">
            SERVICE GROUP I - INSPECTION SERVICE
          </div>
          <div className="my-2 flex flex-col gap-3">
            <div>This group involves the following:</div>
            <ul className="lg:px-0 px-4 list-disc">
              <li>Quality Control and Quality Assurance Services (QA/QC)</li>
              <li>
                Non-destructive Testing (NDT) Services such as radiographic
                testing (RT) , Ultrasonic Testing(UT), Magnetic Particle
                Inspection Testing (MPI), Dye Penetrant inspection Testing (DPI)
              </li>
              <li>Welding Inspection Services.</li>
              <li>Post Weld Heat Treatment Services (PWHT).</li>
            </ul>
            <div className="grid lg:grid-cols-2 gap-3 grid-cols-1">
              {images?.map((it) => (
                <img src={it} alt="" className="py-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const images = [image1, image2, image3, image4];
