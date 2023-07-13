import React, { useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "./Components/Sidebar";
import DashboardInfo from "./Components/DashboardInfo";
import Graph from "./Components/Graph";
import DashboardSummary from "./Components/DashboardSummary";
const Dashboard = () => {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();

  if (status === "authenticated")
    return (
      <>
        <div className=" sm:h-screen h-[1300px] w-full flex font-Montserrat p-5 bg-[#F5F5F5]">
          <div id="sidebard" className="h-full sm:w-1/5 sm:flex hidden ">
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
                b: [100, 420, 70, 450, 90, 130],
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
{
  /* <Link
          href="/Login"
          onClick={() => {
            signOut();
          }}
          >
          sign out
        </Link> */
}
