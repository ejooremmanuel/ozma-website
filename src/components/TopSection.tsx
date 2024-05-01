import React from "react";

import {
  IoCallSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMailSharp,
} from "react-icons/io5";
type Props = {};

const TopSection = (props: Props) => {
  return (
    <div className="w-full bg-primaryColor text-white lg:px-[80px] px-[15px] py-[20px] lg:gap-10 gap-4 flex items-center lg:flex-row flex-col">
      <div className="flex gap-3 text-white">
        <IoCallSharp className="text-[26px] font-[600]" />
        <div>
          <a href="tel:+2347034480707" className="text-decoration-none">
            +234(0)7034480707
          </a>
        </div>
      </div>
      <div className="flex gap-3 text-white">
        <IoMailSharp className="text-[26px] font-[600]" />
        <div>
          <a
            href="mailto:equiry@ozmang.org"
            className="text-decoration-none uppercase"
          >
            equiry@ozmang.org
          </a>
        </div>
      </div>
      <div className="flex lg:justify-end lg:justify-self-end lg:flex-1 gap-2">
        <IoLogoTwitter />
        <IoLogoLinkedin />
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoLogoYoutube />
      </div>
    </div>
  );
};

export default TopSection;
