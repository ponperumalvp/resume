import React from "react";
import { experience } from "../data/experience";
import * as Gi from "react-icons/gi";
import * as Lia from "react-icons/lia";
import * as Pi from "react-icons/pi";
import * as Io from "react-icons/io";

const Right = () => {
  return (
    <div className="m-4">
      <div className="container ml-2 ">
        <div className="grid mt-5 ">
          <h4 className="tracking-[6px] mb-2 text-lg">SKILLS</h4>
          <ul className="  grid grid-cols-2 list-disc ml-8 font-[300]">
            <li>React</li>
            <li>JavaScript</li>
            <li>Html</li>
            <li>Css</li>
            <li>Tailwind</li>
            <li>Redux-Saga</li>
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>MongoDb</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="mt-8">
          {experience.map((e) => {
            return (
              <div>
                <h1 className="tracking-[6px] mb-2 text-lg">{e.title}</h1>
                <h3 className="tracking-[6px] mb-2 text-base">{e.subTitle}</h3>
                <p className="mb-2 font-[400]">
                  {e.date}
                  {e.name}
                </p>
                <ul className="ml-4">
                  <li className="text-[15px] font-[300] leading-[30px] ml-4 list-disc">
                    {e.line}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <h4 className="tracking-[6px] mb-2 text-lg">CERTIFICATES</h4>
          <li className="ml-4 mt-4 font-[300]">
            certificate from coderprofession intern certificate
          </li>
          <div className="ml-4 mt-4 font-[300]">
            <li>
              I have completed courses at GUVI learning platform through online.
              <li className="ml-4 mt-2">Web Development (MERN Stack)</li>
            </li>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="tracking-[6px] mb-3 text-lg">REFERENCES</h4>
          <p className="font-[300]">Mr.Venkatraman</p>
          <p className="font-[300]">Coderprofession</p>
          <p className="font-[300]">venkat@coderprofession.com</p>
          <p className="font-[300]">091766 10769</p>
        </div>
        <div className="mt-8">
          <h3 className="tracking-[6px] mb-2 text-lg">PROJECTS</h3>
          <p>Tour and Travel Booking Web Application</p>
          <div className="mt-4">
            <p className="font-[300] text-[15px] ">
              Creating a tour management system using the MERN stack (MongoDB,
              Express.js, React, and Node.js) is an exciting and challenging
              project.It is Focus on creating a user-friendly, responsive, and
              visually appealing interface.Allow tour operators to create and
              manage tour packages with details such as destinations, dates,
              prices, itineraries, and inclusions. Allow users to create
              accounts and log in securely. Enable users to book and pay for
              their chosen services. Allow users to leave reviews and ratings
              for services they've used. Implement JWT (JSON Web Tokens) for
              user authentication.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="tracking-[6px] mb-2 text-lg">LANGUAGES</h3>
          <ul className="flex m-4 ">
            <li className="mx-5 list-disc font-[300]">Tamil</li>
            <li className="ml-4 list-disc font-[300]">English</li>
          </ul>
        </div>
        <div className="mt-8">
          <h4 className="tracking-[6px] mb-2 text-lg">INTERESTS</h4>
          <ul className="flex mx-4 mt-4 font-[300]">
            <li className="mx-4  flex flex-col items-center">
              <Gi.GiHeadphones className="my-2" />
              Music
            </li>
            <li className="mx-4  flex flex-col items-center">
              <Pi.PiAirplaneTiltThin className="my-2" />
              Travel
            </li>
            <li className="mx-4  flex flex-col items-center">
              <Pi.PiBookThin className="my-2" />
              Read
            </li>
            <li className="mx-4  flex flex-col items-center">
              <Io.IoIosFitness className="my-2" />
              Fitness
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Right;
