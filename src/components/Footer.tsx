import React from "react";
import { IoCallSharp, IoLocationSharp, IoMailSharp } from "react-icons/io5";
import building from "../assets/building.png";

const Footer = () => {
  return (
    <div className="pt-[50px] lg:px-[80px] px-[15px] pb-20px bg-[#97969c] flex flex-col justify-between gap-6 lg:gap-20">
      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4 grid-cols-1 lg:justify-between pt-[20px]">
        <img src={building} alt="building" className="object-fit-cover" />

        <div className="flex lg:flex-row flex-col gap-4 lg:gap-24 text-white justify-self-start">
          <div className="flex gap-4 flex-col">
            <div className="py-4 border-b border-[#fff] text-white text-[28px] font-[600]">
              Head Office
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 text-white">
                <IoLocationSharp className="text-[26px] font-[600]" />
                <div>
                  78 Apala Street, off Giwa Amu Rd,
                  <br />
                  Okumagba Quarters - Warri <br />
                  Delta State
                </div>
              </div>
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
                    className="text-decoration-none"
                  >
                    equiry@ozmang.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="py-4 border-b border-[#fff] text-white text-[28px] font-[600]">
              Branch Office
            </div>
            <div className="flex flex-col gap-6">
              <div>
                13 Okwulle Street,
                <br />
                Unity Estate (Near Owo filling station),
                <br />
                Airport/Airforce New Road,
                <br />
                Eligbolo, Port harcourt, Rivers State
              </div>
              <div>
                9A Abike Animashaun Street,
                <br />
                Lekki Phase 1,
                <br />
                Lagos State
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-[600] text-[16px] pb-5">
        &copy;&nbsp;{new Date().getFullYear()}&nbsp;OZMA Nigeria Company
        Limited. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
