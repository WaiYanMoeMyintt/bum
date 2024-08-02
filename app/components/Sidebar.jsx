'use client';
import React, { useState } from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import General from "./tasks/General";
import Board from "./tasks/Board";
import Ads from "./tasks/Ads";

const Sidebar = () => {
  const { user } = useUser();
  const [column, setColumn] = useState(false);

  return (
    <div className={`py-2 px-2.5 sidebar_content ${!column ? "w-60 transition-all" : "w-36 transition-all"} transition-all duration-300`}>
      <div className="sidebar">
        <div className="sidbar_title cursor-pointer flex py-1.5 px-1.5 bg-white gap-2.5 items-center justify-between shadow-sm rounded-lg">
          <div className="flex gap-1 items-center">
            <Image
              src={`${user?.imageUrl ? user?.imageUrl : "/avatar.png"}`}
              alt="avatar"
              width={35}
              height={35}
              className="rounded-full block"
            />
            <p className={`text-sm font-bold user_title select-none ${!column ? "block transition-all" : "hidden transition-all"}`}>{user?.fullName ? user.fullName : "BumBum's Space"}</p>
          </div>
          <div onClick={() => setColumn(prev => !prev)}>
            <Image src="/column.svg" alt="shield" width={20} height={20} />
          </div>
        </div>

        <General />
        <Board />
        <Ads />
        <SignOutButton>SignOut</SignOutButton>
      </div>
    </div>
  );
};

export default Sidebar;
