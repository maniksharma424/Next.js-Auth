import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { BsChevronCompactDown } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { useData } from "@/customHooks/useData";
const DashboardSummary = () => {

  const chartRef = useRef(null);

  const data = useData()
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Posts 1", "Posts 2", "Posts 3"],
        datasets: [
          {
            data: [data?.data1?.length, data?.data2?.length, data?.data3?.length],
            backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
          },
        ],
      },

      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        layout: {
          padding: 0,
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: 0,
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);
  return (
    <div className="w-full md:h-1/4 h-1/3  flex justify-between flex-wrap">
      <div id="box-1" className=" h-fit md:w-1/2 w-full  md:pr-6 ">
        <div className="h-full w-full bg-white rounded-2xl px-5 py-4">
          <p className="w-full h-1/5 flex justify-between items-center md:px-10 md:text-[17px] text-[12px]">
            <span className="w-1/2 flex justify-center">Top Products</span>
            <span className="flex justify-start w-1/2 items-center text-[#858585] md:text-[12px]">
              May - Jun 2021 <BsChevronCompactDown />
            </span>
          </p>
          <div className="w-full flex h-4/5">
            <div className="w-1/2 h-full flex justify-center items-center">
              <canvas ref={chartRef} className="md:w-24 md:h-24 h-20 w-20 md:mt-3" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-around items-start md:text-[14px] text-[10px] font-[600] px-3">
              <div>
                <p>
                  <span className="px-[9px]  rounded-[30px] bg-[#98D89E] mr-2"></span>
                  <span>Basic Tees</span>
                </p>
                <p className="text-[#858585] md:text-[10px] ml-7">55%</p>
              </div>
              <div>
                <p>
                  <span className="px-[9px]  rounded-[30px] bg-[#F6DC7D] mr-2"></span>
                  <span>Custom Short Pants </span>
                </p>
                <p className="text-[#858585] md:text-[10px] ml-7">31%</p>
              </div>
              <div>
                <p>
                  <span className="px-[9px]  rounded-[30px] bg-[#E9A0A0] mr-2"></span>
                  <span>Super Hoodies</span>
                </p>
                <p className="text-[#858585] md:text-[10px] ml-7">14%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box-2" className=" h-fit  md:w-1/2 w-full rounded-2xl md:pl-6">
        <div className="h-full w-full bg-white rounded-2xl flex-col px-5 py-4">
          <div className="h-1/5 w-full">
            <p className="w-full flex justify-between items-center md:text-[17px] text-[12px]">
              <span>Today's Schedule</span>
              <span className="flex justify-between items-center text-[#858585] md:text-[12px]">
                See all <FiChevronRight />
              </span>
            </p>
          </div>
          <div className="h-2/6 w-full border-l-4 border-[#9BDD7C] px-2 ">
            <p className="text-[12px] font-[500]">Meeting with suppliers from Kuta Bali</p>
            <p className="text-[#999999] md:text-[10px] text-[8px]">14.00 - 15.00</p>
            <p className="text-[#999999] md:text-[10px] text-[8px]">At Sunset Road Kuta Bali</p>
          </div>
          <div className="h-2/6 w-full  border-l-4 border-[#6972C3] mt-2 px-2">
          <p className="text-[12px] font-[500]">Check operation at Giga Factory 1</p>
            <p className="text-[#999999] md:text-[10px] text-[8px]">18.00-20.00</p>
            <p className="text-[#999999] md:text-[10px] text-[8px]">at Central Jakarta </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
