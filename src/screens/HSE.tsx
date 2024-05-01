import React, { useEffect } from "react";
import cd from "../assets/cd.png";
import hse from "../assets/hse.png";
type Props = {};

const HSE = (props: Props) => {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <div className="h-full w-full flex flex-col lg:gap-[40px] gap-[20px]">
      <div
        className="w-full lg:px-[80px] px-[15px] lg:py-[50px] py-[20px] text-white flex flex-col gap-8"
        style={{
          background: `url('${hse}')`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          height: "500px",
        }}
      ></div>
      <div className="lg:px-[80px] px-[15px] lg:py-[40px] py-[20px]">
        <div className="grid lg:grid-cols-[1fr,350px] grid-cols-1 lg:justify-between  gap-3">
          <div className=" w-full h-full">
            The Ozma HSE management system is committed to the promotion of
            health, safety and protection of environment in all of its influence
            and subscribes to the philosophy that all accident are preventable
            that safety behaviour becomes the organization paramount interest
            and addicted way of living to meet the target of goal Zero free
            accident As a leading company in Enhanced HSE Management System
            through planning, implementation, monitoring and review, HSE
            department in OZMA Nig. Co. Ltd. has gone a step further in the
            integration of HSE as a major tool in the realization of the
            objectives of the company. To this end, the Management of OZMA NIG.
            CO. LTD having realized the importance of HSE as a cure aspect of
            the business, has shown commitment through provision of adequate
            resources for the provision of all HSE related materials which upon
            integration, materializes into drastic reduction of accidents,
            incidents, environmental friendly operations as well as improved
            occupational health services for the workforce.
            <br />
            <br />
            HSE issues are very crucial to the operations of OZMA Nig. Co. Ltd
            in view of the increasing realization of the importance of HSE to
            the business. Furthermore, it is made in such a way to align with
            the needs and aspirations of our clients.
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
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Our HSE Policy
        </div>
        <div className="lg:px-[80px] px-[15px]">
          OZMA Nig. Co. Ltd has an integrated HSE Policy.
          <br />
          <br />
          All staff of OZMA Nig. Co. Ltd and sub contractors is expected to
          comply with OZMA NIG. CO. Ltd policies and standards. In addition, Sub
          contractors are required to have their own policies in place in line
          with OZMA NIG. CO. Ltd Policies. Where appropriate, OZMA NIG. CO. LTD
          will provide the necessary assistance to help contractors to achieve
          this.
          <br />
          Line managers usually discuss with new employees the meaning of the
          policy and the implication. <br />
          The employees understanding of the policy is usually confirmed by the
          safety officer.
          <br /> The policy that all accidents are preventable and that HSE is
          as important as any other business cannot be over emphasized.
          Employees of OZMA are also made aware that they are responsible for
          their own safety on and off the job.
          <br />
          The policy is displayed on -all notice board and it is taught to local
          employees in their local languages.
          <br />
          In addition to the OZMA NIG. CO. LTD HSE Policy, separate 2nd and 3rd
          tier policies exist for specific aspects of HSE management which are
          applicable to the Company Operation line with client requirements.
          <br />
          These policies address specific risks that can have negative impact on
          lives, assets, the environment and the health of the workforce,
          contractors, host communities, and other third parties that might be
          affected by company activities
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Our HSE Objectives and Targets
        </div>
        <div className="lg:px-[80px] px-[15px]">
          <ul className="list-disc lg:px-0 px-4">
            <li>Zero fatality in our operations</li>
            <li>Zero Lost Time Injuries resulting from our operations</li>
            <li>Zero Road Traffic Accident/Incident from our operations</li>
            <li>No fire incident in our operations</li>
            <li>
              No marine incident as a result of drowning/man overboard in our
              operations
            </li>
            <li>
              Fitness of the workforce shall be guaranteed by Company doctor via
              retainer clinic before mobilization to site
            </li>
            <li>Minimal environmental pollution </li>
            <li>Zero security incidence</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-primaryColor text-[30px] font-[600] text-center">
          Health Safety and Environment Policy
        </div>
        <div className="lg:px-[80px] px-[15px] pb-[30px]">
          <ul className="list-disc lg:px-0 px-4">
            <li>
              This policy addresses the Health, safety and Environmental risks
              to our operations; and the potential impact on our host
              communities and staff; with strong management commitment at the
              highest level. This policy reflects good working practices and
              shall be made mandatory. Therefore, it shall be our policy to:
            </li>
            <ul className="list-disc px-6">
              <li>
                Continuously pursue the goal of no harm to people and the
                environment.
              </li>
              <li>
                Manage HSE matters as any other critical business activity.
              </li>
              <li>
                Promote a culture in which all OZMA NIG. CO. LTD employees share
                this commitment.
              </li>
              <li>The implications of this policy are that:</li>
              <li>
                All activities shall be analyzed to systematically identify
                related hazards, risks and sensitivities.
              </li>
              <li>
                Arrangements shall be put in place to control the hazards, risks
                and sensitivities and to deal with consequences should they
                arise.
              </li>
              <li>
                Continually assess environmental impact and reduce it to a level
                as low as practicable.
              </li>
              <li>
                Include HSE performance in the appraisal of all staff and reward
                accordingly.
              </li>
            </ul>
            <li>
              As HSE remains the responsibility of each and everyone of us,
              every employee and contractor employee must plan and perform his
              work in accordance with this policy, this policy shall be a high
              level document, clearly understood by all staff, distributed to
              all and we shall all be guided by this policy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HSE;
