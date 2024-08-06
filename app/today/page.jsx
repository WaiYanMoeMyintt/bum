"use client";
import React from "react";
import Image from "next/image";
import CurrentDate from "./CurrentDate";
const Today = () => {
  return (
    <div className="today_content w-100 ">
      <div className="today_title flex gap-2 items-center">
        <p className = "text-[#726c8d] text-sm">General  </p>
        <p className = "bg-[#726c8d] w-1 h-1 rounded-full">  </p>
        <p className = "text-[#726c8d] text-sm">Todo</p>
      </div>
      <div className="today_subtitle mt-4">
        <h3 className = "text-[#352e5d] font-semibold text-xl">Today</h3>
      </div>
      <hr className = "mt-2 shadow-md" />

      <CurrentDate />
    </div>
  );
};

export default Today;
