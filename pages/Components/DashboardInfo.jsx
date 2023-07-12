import React from "react";
import { BiBell } from "react-icons/bi";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { RiHandbagLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const DashboardInfo = () => {
  return (
    <div className="w-full h-1/4 ">
      <div className="w-full h-1/3  flex justify-between items-center">
        <h1 className="sm:w-1/5 w-1/2 font-[700] text-[24px]">Dashboard</h1>
        <div
          id="searchbar"
          className=" sm:w-1/3 w-1/2  h-full flex justify-around items-center text-[20px]"
        >
          <input
            type="text"
            className="rounded-md px-3 py-1 text-[#B0B0B0]  text-[14px]"
            placeholder="search....                       &#128269;"
          />
          <BiBell />
          <Image width={25} height={25} src="/../public/profile-image.png" />
        </div>
      </div>
      <div className="h-2/3 w-full">
        <ul className="h-full w-full py-3 flex justify-between flex-wrap">
          <li className="w-1/5 h-full bg-[#DDEFE0] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <RiHandbagLine />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px]">
              Total Revenues
            </p>
            <p className="w-full justify-center flex sm:font-[600] sm:text-[24px]">
              $ 2, 129, 430
            </p>
          </li>
          <li className="w-1/5 h-full bg-[#F4ECDD] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <MdOutlineLocalOffer />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px]">
              Total Transactions
            </p>
            <p className="w-full justify-center flex sm:font-[600] sm:text-[24px]">
              1,520
            </p>
          </li>
          <li className="w-1/5 h-full bg-[#EFDADA] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <FaRegThumbsUp />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px]">
              Total Likes
            </p>
            <p className="w-full justify-center flex sm:font-[600] sm:text-[24px]">
              9,721
            </p>
          </li>
          <li className="w-1/5 h-full bg-[#DEE0EF] rounded-2xl p-3 ">
            <p className="w-full h-1/3 flex justify-end font-[700] sm:text-[20px]">
              <LuUsers />
            </p>
            <p className="w-full justify-center flex sm:font-[400] sm:text-[14px]">
              Total Users
            </p>
            <p className="w-full justify-center flex sm:font-[600] sm:text-[24px]">
              892
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardInfo;
