import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { BsChevronCompactDown } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

const DashboardSummary = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Super Hoodies", "Custom Short Pants", "Basic Tees"],
        datasets: [
          {
            data: [14, 31, 55],
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
  }, []);
  return (
    <div className="w-full h-1/4  flex justify-between">
      <div id="box-1" className=" h-full w-1/2  pr-6 ">
        <div className="h-full w-full bg-white rounded-2xl px-5 py-4">
          <p className="w-full h-1/5 flex justify-between items-center px-10">
            <span>Top Products</span>
            <span className="flex justify-between items-center text-[#858585] sm:text-[12px]">
              May - Jun 2021 <BsChevronCompactDown />
            </span>
          </p>
          <div className="w-full flex h-4/5">
            <div className="w-1/2 h-full">
              <canvas ref={chartRef} />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-around items-start sm:text-[14px] sm:font-[600] px-3">
              <div>
                <p>
                  <span className="px-[9px]  rounded-[30px] bg-[#98D89E] sm:mr-2"></span>
                  <span>Basic Tees</span>
                </p>
                <p className="text-[#858585] sm:text-[10px] sm:ml-7">55%</p>
              </div>
              <div>
                <p>
                  <span className="px-[9px]  rounded-[30px] bg-[#F6DC7D] sm:mr-2"></span>
                  <span>Custom Short Pants </span>
                </p>
                <p className="text-[#858585] sm:text-[10px] sm:ml-7">31%</p>
              </div>
              <div>
                <p>
                  <span className="px-[9px]  rounded-[30px] bg-[#E9A0A0] sm:mr-2"></span>
                  <span>Super Hoodies</span>
                </p>
                <p className="text-[#858585] sm:text-[10px] sm:ml-7">14%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box-2" className=" h-full w-1/2 rounded-2xl pl-6">
        <div className="h-full w-full bg-white rounded-2xl flex-col px-5 py-4">
          <div className="h-1/5 w-full">
            <p className="w-full flex justify-between items-center">
              <span>Today's Schedule</span>
              <span className="flex justify-between items-center text-[#858585] sm:text-[12px]">
                See all <FiChevronRight />
              </span>
            </p>
          </div>
          <div className="h-2/6 w-full border-l-4 border-[#9BDD7C] px-2">
            <p className="text-[12px] font-[500]">Meeting with suppliers from Kuta Bali</p>
            <p className="text-[#999999] text-[10px]">14.00 - 15.00</p>
            <p className="text-[#999999] text-[10px]">At Sunset Road Kuta Bali</p>
          </div>
          <div className="h-2/6 w-full  border-l-4 border-[#6972C3] mt-2 px-2">
          <p className="text-[12px] font-[500]">Check operation at Giga Factory 1</p>
            <p className="text-[#999999] text-[10px]">18.00-20.00</p>
            <p className="text-[#999999] text-[10px]">at Central Jakarta </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
