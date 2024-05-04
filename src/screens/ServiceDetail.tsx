import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itServices } from "../it-services";

type Props = {};

const ServiceDetail = (props: Props) => {
  const { slug } = useParams();

  const [service, setService] = useState<{
    slug: string;
    description: string;
    heading: string;
    bg: string;
    thumb: string;
    thumbTitle: string;
  }>();

  useEffect(() => {
    setService(itServices.find((it) => it.slug === slug));
  }, [slug]);

  return (
    <div className="h-full w-full flex flex-col lg:gap-[40px] gap-[20px]">
      <div
        className="w-full lg:px-[80px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
        style={{
          background: `url('${service?.bg}')`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <h1 className="text-[38px] font-[600]">{service?.heading}</h1>
        <div className=" lg:w-[60%] w-[90%] leading-8">
          {service?.description}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
