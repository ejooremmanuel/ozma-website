import React from "react";

type Props = {};

const ITFooter = (props: Props) => {
  return (
    <div className="flex flex-col gap-[40px] py-[30px]">
      <div>
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Take the next step towards your career goals
        </div>
        <div className="lg:px-[80px] px-[15px]">
          OZMA is one of the Leading Computer Training Institute in Warri
          Committed to Offering Top-Notch Training in Software, Hardware and
          Networking. We offer high-quality training opportunities to senior
          management personnel in various organizations.
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
    </div>
  );
};

export default ITFooter;
