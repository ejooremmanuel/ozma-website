import React from "react";
import about from "../assets/about.png";
import cd from "../assets/cd.png";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="h-full w-full flex flex-col lg:gap-[40px] gap-[20px]">
      <div
        className="w-full lg:px-[80px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
        style={{
          background: `url('${about}')`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "500px",
        }}
      >
        <h1 className="text-[38px] font-[600]">
          About <span className="text-primaryColor">Us</span>
        </h1>
        <div className=" lg:w-[60%] w-[90%] leading-8">
          We strongly believe that the best job delivered after time is
          worthless Thus we have highly skilled and efficient personnels.
        </div>
      </div>
      <div className="lg:px-[80px] px-[15px] lg:py-[40px] py-[20px]">
        <div className="font-[600]">
          OZMA Nigeria Company Limited is a 100% indigenous ISO 9001:2008
          certified company originally founded in 1994 and operated as a sole
          proprietor and thereafter incorporated in 1999 with the Corporate
          Affairs Commission of Nigeria. We have established a successful track
          record of managing and delivering top quality projects through a
          proven and effective business model.
        </div>
        At OZMA, our work is never complete without the final nod of approval
        from our clients'. Projects are processed through stringent quality
        control measures and only after tedious inspection and tests is the
        project handed over to the client. We are committed to our client’s
        satisfaction and approval.
        <div className="font-[600]">
          Our head office is situated at No 78, Apala Street, Off Giwa-Amu Road,
          in Warri – Delta State and maintains branch offices at No. 13, Okwulle
          Street, Unity Estate (Near Owo filling station) Airport / Air Force
          new road, Eligbolo, Port Harcourt, Rivers State and a Liaison Office
          at No. 9A Abike Animashaun Street, Lekki Phase 1 Lagos. Our offices
          are well equipped and conducive for work.
        </div>
      </div>
      <div className="bg-[#e6e6e6] lg:px-[80px] px-[15px] lg:py-[40px] py-[20px]  grid lg:grid-cols-3 lg:gap-[50px] grid-cols-1 gap-4 w-full box-border">
        <div className="flex flex-col">
          <div className="bg-[#596cb3] font-[600] text-[16px] py-[20px] text-white px-4">
            Quality Policy
          </div>
          <div className="p-4 bg-white h-[200px]">
            It is the policy of OZMA in conducting its business, to ensure
            complete compliance to client requirements, to meet client needs and
            strive to exceed client expectations in a cost effective manner
            while maintaining regulatory and statutory requirements
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#596cb3] font-[600] text-[16px] py-[20px] text-white px-4">
            Our Equipment
          </div>
          <div className="p-4 bg-white lg:h-[200px] h-[250px]">
            In addition to skilled and experienced operators, good equipment are
            necessary for efficiency in project execution. OZMA has sufficient
            experience in the selection of equipment most suitable for their
            requirements of reliable and prompt on-site project works in view of
            clients demand. To see our equipment&nbsp;
            <a href="/equipemnt">click here</a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-[#596cb3] font-[600] text-[16px] py-[20px] text-white px-4">
            Community Development
          </div>
          <div
            className="p-4 bg-white h-[200px] text-white w-full"
            style={{
              background: `url('${cd}')`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              backgroundSize: "cover",
            }}
          >
            Since the founding of OZMA, it has trained more than Three Hundred
            (300) persons of different ethnic and educational backgrounds to
            become competent QA/QC and NDT professionals
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Our Methodology
        </div>
        <div className="lg:px-[80px] px-[15px]">
          We are committed to finding the best way forward in a fast moving and
          highly competitive technological World. To remain at the top we
          relentlessly pursue innovative solutions, and constantly grow our
          knowledge base. Thus we strive to:
          <ul className="list-disc lg:px-0 px-4">
            <li>
              Not just achieve but exceed client’s needs for high quality.
            </li>
            <li>Develop services that are cost effective and efficient.</li>
            <li>
              Develop the skills of employees, enhance their teamwork and
              creativity.
            </li>
            <li> Protect the environment.</li>
            <li>Achieve high standards of occupational health and safety.</li>
            <li>Ensure the company’s profitable growth.</li>
            <li>
              Ascertain that quality remains at the forefront of our services.
            </li>
          </ul>
          <div className="pl-6">
            In everything we do, even in the Community, we always work in a
            customer and objective oriented manner with clearly defined goals in
            terms of Quality of services. In all our professional areas, and at
            all levels, we carry out our duties skillfully and diligently. Our
            relationship with our customers enthuses with warmth and a genuine
            desire to meet their needs.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Our Awards
        </div>
        <div className="lg:px-[80px] px-[15px]">
          <ul className="list-disc lg:px-0 px-4">
            <li>
              Gold category in International Quality Crown Award for quality
              services delivery  (LONDON 2014) by the Business Initiative
              Direction.
            </li>
            <li>
              HSE Recognition Award 2014 by ADDAX PETROLEUM for outstanding
              contribution to safety in service delivery.
            </li>
            <li>
              Gold Category in Century International Quality Era Award for
              quality services delivery (GENEVA 2014) by the Business Initiative
              Direction.
            </li>
            <li>
              Niger Delta Symbol of diligent and efficient services delivery
              2014.
            </li>
            <li>
              Most outstanding indigenous oil and gas servicing company in the
              south-south region of Nigeria 2014 by SSYA.
            </li>
            <li>
              Best Oil and Gas service provider in Nigeria award 2013 by the
              CAPITAL FINANCE INTERNATIONAL OF UNITED KINGDOM (U.K).
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Community Affairs Policy
        </div>
        <div className="lg:px-[80px] px-[15px] lg:pb-[40px] pb-[20px] flex flex-col lg:gap-[25px] gap-[15px]">
          <div>
            As a leading company in oilfield construction activities, spanning
            across various communities, we are committed to the yearnings and
            development of our host communities. This we have demonstrated by
            integrating our community affairs to our HSE operations. It is our
            policy that: our host communities shall have the knowledge of our
            mission before commencement of work and a mutually beneficial
            relationship shall be maintained during and after our operations.
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div>
                <div>FOCUS</div>
              </div>
              <ul className="list-disc lg:px-0 px-4">
                <li>
                  To minimize to the barest minimum, the impact of our operation
                  on our working environment
                </li>
                <li>
                  To reduce to the barest minimum project related CA
                  conflicts/disturbances.
                </li>
                <li>
                  To enlighten our host communities on the benefits derivable
                  from community related project.
                </li>
                <li>To enhance our host communities awareness HSE issues.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <div>STRATEGY</div>
              <ul className="list-disc lg:px-0 px-4">
                <li>
                  Liaising with genuine representative of our host communities
                  before commencement of work.
                </li>
                <li>
                  Establishing Community Affairs Committees for projects with
                  host communities.
                </li>
                <li>
                  Having bimonthly Community/Affair meeting where all CA issues
                  are discussed and resolved in favour of both parties.
                </li>
                <li>
                  Having a resident P.R.O on our work location as a liaison
                  officer between the company and our host communities.
                </li>
                <li>
                  Establishing the “CA Award for peaceful Co-existence” for host
                  communities without disturbances during our operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
