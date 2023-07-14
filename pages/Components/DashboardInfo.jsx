import React from "react";
import { BiBell } from "react-icons/bi";
import { RiHandbagLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CiMenuBurger } from "react-icons/ci";

import ResponsiveSidebar from "./ResponsiveSidebar";
import { useDispatch } from "react-redux";
import { changeOpacity } from "@/Slices/dashboardSlice.js";
import profileImage from "/Users/Repositories/Next-Auth/next-auth/public/profileImage.png"
import Image from "next/image";

const DashboardInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  return (
    <div className="w-full sm:h-1/4 h-1/3 ">
      <div
        id="info"
        className="w-full sm:h-1/3 h-1/2  flex flex-wrap  sm:justify-between  items-center"
      >
        <button
          onClick={() => {
            setShowModal(true);
            dispatch(changeOpacity())
          }}
          className="sm:hidden flex w-full justify-end items-center"
        >
          <CiMenuBurger />
        </button>
        <h1 className="sm:w-1/5 w-full h-1/3 flex justify-center items-center  font-[700] text-[24px]">
          Dashboard
        </h1>
        <div
          id="searchbar"
          className=" sm:w-1/3 w-full sm:h-full h-1/3 flex justify-around items-center text-[20px]"
        >
          <input
            type="text"
            className="rounded-md px-3 w-full sm:w-3/5 py-1 text-[#B0B0B0]  text-[14px]"
            placeholder="search....    "
          />
          <BiBell className="sm:flex hidden " />
          <Image
            className="sm:flex hidden"
            width={25}
            height={25}
            src={profileImage}
          />
        </div>
      </div>
      <div className="h-2/3 w-full">
        <ul className="h-full w-full py-3 flex justify-between flex-wrap">
          <li className="sm:w-1/5 w-2/5 m-1  h-fit bg-[#DDEFE0] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <RiHandbagLine />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px] text-[10px]">
              Total Revenues
            </p>
            <p className="w-full justify-center flex font-[600] sm:text-[24px] text-[14px] ">
              $ 2, 129, 430
            </p>
          </li>
          <li className="sm:w-1/5 w-2/5 m-1  h-fit bg-[#F4ECDD] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <MdOutlineLocalOffer />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px] text-[10px]">
              Total Transactions
            </p>
            <p className="w-full justify-center flex font-[600] sm:text-[24px] text-[14px] ">
              1,520
            </p>
          </li>
          <li className="sm:w-1/5 w-2/5 m-1  h-fit bg-[#EFDADA] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <FaRegThumbsUp />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px] text-[10px]">
              Total Likes
            </p>
            <p className="w-full justify-center flex font-[600]  sm:text-[24px] text-[14px] ">
              9,721
            </p>
          </li>
          <li className="sm:w-1/5 w-2/5 m-1  h-fit bg-[#DEE0EF] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <LuUsers />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px] text-[10px]">
              Total Users
            </p>
            <p className="w-full justify-center flex font-[600] sm:text-[24px] text-[14px] ">
              892
            </p>
          </li>
        </ul>
      </div>
      {showModal ? createPortal(<ResponsiveSidebar handleShowModal={()=>{
        setShowModal(!showModal)
      }} />, document.body) : null}
    </div>
  );
};

export default DashboardInfo;
