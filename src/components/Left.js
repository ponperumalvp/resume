import React from "react";
import * as fa from "react-icons/fa6";
import * as hi from "react-icons/hi";
import * as pi from "react-icons/pi";
import * as ci from "react-icons/ci";
import myPhoto from "../photo/myphoto2.jpeg";
import "../styles/Left.css";
import { profile } from "../data/profile";
import { education } from "../data/education";

const Left = () => {
  return (
    <div className="bg-secondaryClr">
      <div className="container p-4 mt-6 ">
        <header className="flex flex-col items-center">
          <img
            src={myPhoto}
            alt="myImage"
            className="w-40 h-40  rounded-full"
          />
          <p className="text-xl tracking-[6px] mt-4">PONPERUMAL V</p>
          <p className=" text-base tracking-[3px] mt-1">React Developer</p>
          <p className="text-sm mt-1">(MERN Fullstack)</p>
        </header>
        <div className="mt-10">
          <p className="flex align-middle font-[300] mb-2 ">
            <ci.CiLocationOn className="w-2.7 mr-2 mt-1 " />
            Tuticorin,India
          </p>
          <a
            href="mailto:ponperumal1998@gmail.com"
            className="flex mb-2 font-[300] hover:font-[400] cursor-pointer"
          >
            <ci.CiMail className="w-2.7 mr-2 mt-1  " />
            ponperumal1998@gmail.com
          </a>
          <p className="flex mb-2 font-[300]">
            <pi.PiPhoneThin className=" mr-2 mt-1 " />
            9626667943
          </p>
        </div>
        <div className="mt-10 flex flex-col">
          <h1 className="tracking-[6px] mb-4 text-lg ">SOCIAL</h1>
          <a
            href="https://www.linkedin.com/in/ponperumalv "
            target="blank"
            className="flex mb-2 font-[300] hover:font-[400] cursor-pointer"
          >
            <ci.CiLinkedin className="w-5 mr-2 mt-1" />
            @ponperumalvp
          </a>
          <a
            href="https://github.com/ponperumalvp"
            target="blank"
            className="flex mb-2 font-[300] hover:font-[400] cursor-pointer"
          >
            <pi.PiGithubLogoThin className="w-5 mr-2 mt-1" />
            @ponperumalvp
          </a>
        </div>
        <div className="mt-8">
          <h3 className="tracking-[6px] mb-4 text-lg ">PROFILE </h3>

          {profile.map((item, index) => (
            <ul className="list-disc ml-4">
              <li className="mb-2 font-[300] text-[15px]">{item.line}</li>
            </ul>
          ))}
        </div>

        <div className="mt-8">
          <h1 className="tracking-[6px] mb-2 text-lg">EDUCATION</h1>
          <div className="flex ml-4">
            <div className="border-l border-black h-[160px] mt-[17px] mr-[5.6px] "></div>
            <div>
              {education.map((item) => {
                return (
                  <div className="m-2 font-[300] text-[16px]">
                    <ul>
                      <li className="list-disc ">{item.course}</li>
                      <li className="list-none">{item.institude}</li>
                      <li className="list-none">{item.year}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
