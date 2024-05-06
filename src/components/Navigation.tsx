import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, matchPath, useLocation } from "react-router-dom";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
type Props = {};

const Navigation = (props: Props) => {
  const path = useLocation().pathname;

  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center gap-16 lg:px-[80px] px-[15px]">
      {!toggle && (
        <img src={logo} alt="" className="h-[100px] w-[150px] flex lg:flex" />
      )}

      <div className="lg:flex gap-10 hidden">
        {links?.map((it, index) => (
          <div key={index}>
            <Link to={it.link} className={"font-[600] whitespace-nowrap"}>
              {it?.title}
            </Link>
            {path !== "/" && it.link.match(path) ? (
              <div className="border-primaryColor border-b-[3px]"></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      {!toggle && (
        <div
          className="lg:hidden flex flex-1 justify-end justify-self-end cursor-pointer z-50 "
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {!toggle ? <IoMenuSharp /> : <IoCloseSharp />}
        </div>
      )}

      <div
        className={
          toggle
            ? "flex flex-col gap-2 fixed bg-slate-500/90 w-full h-screen overflow-y-scroll items-center left-0 top-[95px] z-40"
            : "hidden"
        }
      >
        <img src={logo} alt="" className="h-[100px] w-[150px] relative z-50" />
        <div
          className="flex flex-1 justify-end justify-self-end cursor-pointer z-50 absolute right-[20px] top-[20px]"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {!toggle ? <IoMenuSharp /> : <IoCloseSharp />}
        </div>

        <div className="flex gap-4 flex-col items-center">
          {links?.map((it, index) => (
            <div key={index}>
              <Link to={it.link} className={"font-[600] text-center"}>
                {it?.title}
              </Link>

              {path !== "/" && new RegExp(it.link, "ig").test(path) ? (
                <div className="border-primaryColor border-b-[3px]"></div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;

const links = [
  {
    title: "Home",
    link: "/home",
    match: "home",
  },
  {
    title: "About Us",
    link: "/about",
    match: "about",
  },
  {
    title: "Our Service",
    link: "/services",
    match: "services",
  },
  {
    title: "HSE",
    link: "/hse",
    match: "hse",
  },
  {
    title: "IT",
    link: "/information-technology",
    match: "information-technology",
  },
  {
    title: "Our Partners",
    link: "/partners",
    match: "partners",
  },
  {
    title: "Project History",
    link: "/projects",
    match: "projects",
  },
  {
    title: "Contact Us",
    link: "/contact",
    match: "contact",
  },
];
