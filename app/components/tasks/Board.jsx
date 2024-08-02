"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BumBumContext } from "@/app/context/BumBum";
const Board = () => {
  const {hover, setHover} = useContext(BumBumContext);
    
  return (
    <div className="mt-5 px-1">
      <div className="general_title  py-2 flex items-center rounded-md px-1 justify-between gap-1">
        <h3 className="text-slate-500 text-sm">Boards</h3>
        <div className = "hover:bg-white shadow-sm  rounded-full cursor-pointer">
          <Image src="/plus.svg" alt="create" width={20} height={20} />
        </div>
      </div>
      <div className="general_list flex flex-col gap-6 mt-4">
        <div
          onClick={() => setHover(5)}
          className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer ${
            hover === 5 ? "bg-white shadow-sm transition-all" : "bg-transparent"
          }`}
        >
          <div className = "bg-red-500 w-2 h-2 rounded-full"></div>
          <p className="text-sm">Skincare Routine</p>
        </div>
        <div
          onClick={() => setHover(7)}
          className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer ${
            hover === 7 ? "bg-white shadow-sm transition-all" : "bg-transparent"
          }`}
        >
          <div className = "bg-teal-500 w-2 h-2 rounded-full"></div>
          <p className="text-sm">Workout</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
