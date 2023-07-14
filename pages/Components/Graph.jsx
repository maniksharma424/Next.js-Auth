import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { BsChevronCompactDown } from "react-icons/bs";
const Graph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "User A",
            data: data.a,
            borderColor: "#E9A0A0",
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: "User B",
            data: data.b,

            borderColor: "#9BDD7C",
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        
        plugins: {
          
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {

            grid: {
              drawTicks: true,
              drawOnChartArea: false,

            
            },
            
            ticks: {
              display: true,
              
            },
          },
          y: {
            grid: {
              drawBorder: false,
              drawOnChartArea: true,
              
            },
            ticks: {
              stepSize: 100,
              display: true,
            },
            
          },
          
        },
        
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className=" md:h-2/5 h-1/5 w-full   bg-white rounded-2xl md:px-8 md:py-4 px-4 py-2">
      <div className="h-1/5 w-full flex justify-between">
        <div className="w-1/2 h-full">
          <p className="md:text-[18px] text-[12px] md:font-[700]">Activities</p>
          <p className="flex justify-start items-center md:text-[12px] text-[8px] md:font-[400]  text-[#858585] ">
            May - Jun 2021{" "}
            <span className="ml-1">
              {" "}
              <BsChevronCompactDown />
            </span>
          </p>
        </div>
        <div className="md:w-2/5 w-1/2 flex md:justify-between justify-around md:items-center items-start md:text-[14px] text-[10px] ">
            <p>
                <span className="md:px-[8px] px-[4px]    rounded-3xl bg-[#E9A0A0]"></span>
                <span className="md:ml-2 ml-1">Guest</span>
            </p>
            <p>
                <span className="md:px-[8px] px-[4px]   rounded-3xl bg-[#9BDD7C]"></span>
                <span className="md:ml-2 ml-1">User</span>
            </p> 
        </div>

      </div>
      <div className="h-4/5 w-full">
        <canvas
          ref={chartRef}
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Graph;
