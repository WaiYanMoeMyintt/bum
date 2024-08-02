'use client';
import React,{useState} from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import General from "./tasks/General";
import Board from "./tasks/Board";
import Ads from "./tasks/Ads";
const Sidebar = () => {
  const { user } = useUser();
  console.log(user);
  const [column, setColumn] = useState(false);
  return (
    <div className = "bg-blue-500 py-2 px-2.5 sidebar_content w-60">
      <div className="sidebar">
        <div className="sidbar_title cursor-pointer flex py-1.5 px-1.5 bg-white gap-2.5 items-center justify-between  shadow-sm rounded-lg">
          <div className="flex gap-1 items-center">
            <Image
              src={`${user?.imageUrl ? user?.imageUrl : "/avatar.png"}`}
              alt="avatar"
              width={35}
              height={35}
              className = "rounded-full block"
            />
            <p className = "text-sm  font-bold user_title select-none">{user?.fullName ? user.fullName : "BumBum's Space"}</p>
          </div>
          <Image src="/column.svg" alt="shield" width={20} height={20} />
        </div>

        <General />
        <Board/>
        <Ads />
        <SignOutButton>SignOut</SignOutButton>
      </div>
    </div>
  );
};

export default Sidebar;
