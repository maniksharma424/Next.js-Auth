import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import google from "../public/google.png"
import apple from "../public/apple.png"
const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push("/Dashboard");
  } else
    return (
      <div
        id="main-conatainer"
        className="w-full h-screen md:flex font-Montserrat "
      >
        <div
          id="Board"
          className="w-2/5 md:h-full  border-black bg-[#000000] md:flex justify-center items-center font-[700] text-[72px] text-white hidden"
        >
          <p>Board.</p>
        </div>
        <div
          id="Login-Info"
          className="md:w-3/5 md:h-full w-full h-full flex justify-center items-center md:bg-[#F5F5F5] p-6"
        >
          <div
            id="login-Box"
            className="md:w-1/2 md:h-3/5 w-2/3 h-3/5  flex flex-col md:justify-between justify-evenly md:items-start items-center "
          >
            <div
              id="sign-in"
              className="w-full flex flex-col md:justify-center md:items-start justify-center items-center"
            >
              <p className="md:font-[700] md:text-[36px] font-[500] text-[25px] ">
                Sign In
              </p>
              <p className="md:font-[400] md:text-[16px] text-[14px] ">
                Sign in to your account
              </p>
            </div>
            <div
              id="google-SignIn"
              className="flex md:flex-row flex-col  w-full justify-between md:text-[12px] text-[10px] text-[#858585]  "
            >
              <button
                onClick={() => {
                  signIn();
                }}
                className="bg-white md:py-2 md:px-3 py-1 px-2 flex  items-center rounded-lg md:justify-start justify-center   border-[1px] md:border-0 "
              >
                <Image
                  height={15}
                  width={15}
                  className="mx-1"
                  src={google}
                />
                Sign in with Google
              </button>
              <button
                onClick={() => {
                  signIn();
                }}
                className="bg-white md:py-2 md:px-3 py-1 px-2 flex  items-center rounded-lg md:mt-0 mt-2 md:justify-start justify-center   border-[1px] md:border-0"
              >
                <Image
                  height={25}
                  width={25}
                  className="mx-1"
                  src={apple}
                />
                Sign in with Apple
              </button>
            </div>
            <div
              id="Login-Crediantials"
              className="w-full md:h-3/5 h-2/5 border-[1px] rounded-2xl flex flex-col justify-around items-start md:py-5 md:px-8 px-4 py-3 bg-white font-[300] md:text-[16px] text-[12px]"
            >
              <div className="w-full">
                <p>Email address</p>
                <input
                  type="text"
                  className="w-full md:p-1 p-[1px] md:rounded-xl rounded-md bg-[#EAEAEA]"
                />
              </div>
              <div className="w-full">
                <p>Passoword</p>
                <input
                  type="password"
                  className="w-full md:p-1 p-[1px] md:rounded-xl rounded-md bg-[#EAEAEA]"
                />
              </div>
              <span className="text-[#346BD4] ">Forgot passowrd ?</span>
              <button
                onClick={() => {
                  signIn();
                }}
                className="w-full bg-black text-white py-1 rounded-lg md:font-[600] "
              >
                Sign In
              </button>
            </div>
            <span className="w-full flex justify-center md:text-[14px] text-[12px]">
              <span className="text-[#858585]">Don't have an account? </span>
              <button
                onClick={() => {
                  signIn();
                }}
                className="text-[#346BD4]"
              >
                {" "}
                Register here
              </button>
            </span>
          </div>
        </div>
      </div>
    );
};

export default Login;
