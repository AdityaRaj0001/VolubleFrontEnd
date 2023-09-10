import React from "react";
import "../index.css";

const Herosection = () => {
  return (
    <>
      <div className="flex justify-between h-auto bg-black ">
        <div className="w-1/2 relative flex justify-center">
        <img className=" "
          // className="p-2 h-[740px] 2xl:w-[1000px] xl:w-[760px] lg:w-[720px] md:w-screen md:p-2 sm:w-[550px]"
          src="/Rectangle 7.png"
          alt="herobg"
        ></img>

          <div className="absolute flex flex-col mt-36">
          <h1 className="text-white  w-[450px] tracking-[2.15px]  font-bold xl:text-[57px] leading-tight sm:text-[50px] md:w-[470px] md:tracking-[2.15px]">
            Embrace Total Anonymity and Unyielding Privacy
          </h1>
          <p className="text-white mt-[32px] tracking-[0.11px] xl:w-[538px] text-base md:text-20px sm:w-[450px]">
            Embark on a journey into the world of seamless and secure
            communication with our cutting-edge Private Chat App.🌐Unveiling a
            realm where your privacy takes center stage and anonymity becomes
            your shield, we present a platform tailored exclusively for YOU.
          </p>

          <button className="text-white h-[54px] w-[252px] mt-7 border rounded-full flex items-center">
            <p className="pl-5 text-[17px]">DOWNLOAD THE APP</p>
            <img
              className="w-[38px] h-[38px] ml-[14px]"
              src="/Frame 2.png"
              alt="download now btn"
            ></img>
          </button>
        </div> 

        </div>
        
       
        
        <div className="w-1/2 flex justify-center mt-36 relative">
<div className="gradient absolute  z-0 sm:w-[160px] md:w-[320px]  lg:w-[460px]"></div> 
        <img
          src="/Vector_Big.png"
          alt="logo"
          className="z-10 lg:h-[424px] lg:w-[364px]"
        ></img>
        </div>
        
      </div>
    </>
  );
};

export default Herosection;
