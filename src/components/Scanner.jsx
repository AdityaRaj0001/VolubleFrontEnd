import React from "react";

const Scanner = () => {
  return (
    <div className="bg-black lg:h-[1000px] 2xl:w-full pl-1 flex items-start">
      <img
        className="2xl:w-full h-[950px] pr-[5.5px]"
        src="/Rectangle 12.png"
        alt="background-scanner"
      ></img>
      <img
        className="absolute pt-[400px] pl-[1070px]"
        src="/Light.png"
        alt="notification"
      ></img>
      <img
        className="absolute pt-[700px] pl-[60px]"
        src="/Light.png"
        alt="notification"
      ></img>

      <h1 className="text-white text-6xl font-bold absolute pl-[220px] pt-20">
        Scan To Download Voluble App
      </h1>
      <img
        className="absolute pt-[280px] pl-[490px]"
        src="/iPhone 14 Pro - Deep Purple - Portrait.png"
        alt="phone"
      ></img>
      <img
        className="absolute pt-[540px] pl-[600px]"
        src="/qrcode.png"
        alt="qr"
      ></img>
      <img
        className="absolute  pt-[640px] pl-[710px]"
        src="/Social_Media_Icons.png"
        alt="qr logo"
      ></img>
    </div>
  );
};

export default Scanner;
