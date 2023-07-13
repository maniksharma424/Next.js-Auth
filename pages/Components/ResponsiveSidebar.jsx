import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { defaultOpacity } from "@/slices/dashboardSlice";
import { motion } from "framer-motion";
const ResponsiveSidebar = ({ handleShowModal }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
    initial={{ x: "80%" }} // Initial position (off-screen to the right)
    animate={{ x: 0 }} // Animation to the final position (0)
    transition={{ duration: 0.3 }} // Animation duration
    className="w-1/2 h-full absolute right-0 top-0 bg-black sm:rounded-2xl">
      <div id="menu" className="w-full h-1/2 text-white">
        <div className="flex justify-end items-center p-5 text-[20px]">
          <button
            onClick={() => {
              handleShowModal();
              dispatch(defaultOpacity());
            }}
          >
            <RxCross1 />
          </button>
        </div>
        <div
          id="heading"
          className="sm:h-2/5 h-1/5  sm:text-[36px] text-[24px] font-[700] flex justify-center items-center"
        >
          <h1>Board.</h1>
        </div>
        <div id="widgets" className="h-3/5 w-full">
          <ul className="flex flex-col w-full h-full justify-around items-center sm:font-[300] sm:text-[17px] ">
            <li className="w-4/5  flex  items-center sm:mr-3">
              <span className="w-1/3 flex justify-end">
                <MdDashboard />
              </span>
              <span className=" w-2/3 pl-5">Dashboard</span>
            </li>
            <li className="w-4/5  flex  items-center sm:mr-3">
              <span className="w-1/3 flex justify-end">
                <MdLocalOffer />
              </span>
              <span className=" w-2/3 pl-5">Transactions</span>
            </li>
            <li className="w-4/5  flex  items-center sm:mr-3">
              <span className="w-1/3 flex justify-end">
                <BsFillCalendarEventFill />
              </span>
              <span className=" w-2/3 pl-5">Schedules</span>
            </li>
            <li className="w-4/5  flex  items-center sm:mr-3">
              <span className="w-1/3 flex justify-end">
                <FaRegUserCircle />
              </span>
              <span className=" w-2/3 pl-5">Users</span>
            </li>
            <li className="w-4/5  flex  items-center sm:mr-3">
              <span className="w-1/3 flex justify-end">
                <FiSettings />
              </span>
              <span className=" w-2/3 pl-5">Settings</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact" className="h-1/2 w-full flex items-end ">
        <ul className="w-full h-1/3 sm:py-5 text-[14px] font-[400] text-white flex flex-col justify-evenly items-center">
          <li className="w-2/5">Help</li>
          <li className="w-2/5">Contact us</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResponsiveSidebar;