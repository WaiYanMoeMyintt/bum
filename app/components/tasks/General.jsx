"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Board from "./Board";
import { BumBumContext } from "@/app/context/BumBum";
const General = () => {
  const { hover, setHover } = useContext(BumBumContext);
  return (
    <>
      <div className="mt-5 px-1">
        <div className="general_title">
          <h3 className="text-slate-500 text-sm">General</h3>
        </div>
        <div className="general_list flex flex-col gap-6 mt-4">
          <Link
            onClick={() => setHover(1)}
            href="/today"
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer ${
              hover == 1
                ? "bg-white shadow-sm transition-all"
                : "bg-transparent"
            }`}
          >
            <Image
              src={hover === 1 ? "/hover_home.svg" : "/home_simple.svg"}
              alt="home"
              width={20}
              height={20}
            />
            <p className="text-sm">Today</p>
          </Link>
          <Link
            href="/inbox"
            onClick={() => setHover(2)}
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer ${
              hover == 2
                ? "bg-white shadow-sm transition-all"
                : "bg-transparent"
            }`}
          >
            <Image
              src={hover === 2 ? "/hover_mail.svg" : "/mail.svg"}
              alt="home"
              width={20}
              height={20}
            />
            <p className="text-sm">Inbox</p>
          </Link>
          <Link
            href="/calendar"
            onClick={() => setHover(3)}
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer ${
              hover == 3
                ? "bg-white shadow-sm transition-all"
                : "bg-transparent"
            }`}
          >
            <Image
              src={hover === 3 ? "/hover_calendar.svg" : "/calendar.svg"}
              alt="home"
              width={20}
              height={20}
            />
            <p className="text-sm">Calendar</p>
          </Link>
          <Link
            href="/trash"
            onClick={() => setHover(4)}
            className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer ${
              hover == 4
                ? "bg-white shadow-sm transition-all"
                : "bg-transparent"
            }`}
          >
            <Image
              src={hover === 4 ? "/hover_trash.svg" : "/trash.svg"}
              width={20}
              height={20}
            />
            <p className="text-sm">Trash</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default General;
