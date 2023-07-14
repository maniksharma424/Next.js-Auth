import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-black md:rounded-2xl">
      <div id="menu" className="w-full h-1/2 text-white">
       
        <div
          id="heading"
          className="md:h-2/5 h-1/5  md:text-[36px] text-[24px] font-[700] flex justify-center items-center"
        >
          <h1>Board.</h1>
        </div>
        <div id="widgets" className="h-3/5 w-full">
          <ul className="flex flex-col w-full h-full justify-around items-center md:font-[300] md:text-[17px] ">
            <li className="w-4/5  flex  items-center md:mr-3">
              <span className="w-1/3 flex justify-end">
                <MdDashboard />
              </span>
              <span className=" w-2/3 pl-5">Dashboard</span>
            </li>
            <li className="w-4/5  flex  items-center md:mr-3">
              <span className="w-1/3 flex justify-end">
                <MdLocalOffer />
              </span>
              <span className=" w-2/3 pl-5">Transactions</span>
            </li>
            <li className="w-4/5  flex  items-center md:mr-3">
              <span className="w-1/3 flex justify-end">
                <BsFillCalendarEventFill />
              </span>
              <span className=" w-2/3 pl-5">Schedules</span>
            </li>
            <li className="w-4/5  flex  items-center md:mr-3">
              <span className="w-1/3 flex justify-end">
                <FaRegUserCircle />
              </span>
              <span className=" w-2/3 pl-5">Users</span>
            </li>
            <li className="w-4/5  flex  items-center md:mr-3">
              <span className="w-1/3 flex justify-end">
                <FiSettings />
              </span>
              <span className=" w-2/3 pl-5">Settings</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact" className="h-1/2 w-full flex items-end ">
        <ul className="w-full h-1/3 md:py-5 text-[14px] font-[400] text-white flex flex-col justify-evenly items-center">
          <li className="w-2/5">Help</li>
          <li className="w-2/5">Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
