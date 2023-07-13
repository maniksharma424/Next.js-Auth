import React, { useEffect, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";

import Sidebar from "./Components/Sidebar";
import DashboardInfo from "./Components/DashboardInfo";
import Graph from "./Components/Graph";
import DashboardSummary from "./Components/DashboardSummary";
import { useSelector } from "react-redux";
const Dashboard = () => {

  const { data: session, status } = useSession({ required: true });
  const opacity = useSelector((store) => store.dashboardSlice.opacity);

 
  if (status === "authenticated")
    return (
      <>
        <div
          className={` sm:h-screen   w-full flex font-Montserrat p-5 bg-[#F5F5F5] ${
            opacity ? "blur-sm opacity-70 h-[600px]" : "h-[1300px]"
          }`}
        >
          <div id="sidebard" className="h-full sm:w-1/5 w-2/3 sm:flex hidden ">
            <Sidebar />
          </div>
          <div
            id="Dashboard-Info"
            className="sm:w-5/6 w-full h-full flex flex-col justify-between sm:px-20 sm:py-4"
          >
            <DashboardInfo />
            <Graph
              data={{
                a: [200, 400, 200, 300, 220, 450],
                b: [100, 500, 70, 450, 90, 130],
              }}
            />
            <DashboardSummary />
          </div>
        </div>
      </>
    );
};

export default Dashboard;

export const getServerSidePorps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/Login",
      },
    };
  }
  return {
    props: { session },
  };
};
