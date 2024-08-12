'use client';
import React, { createContext, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Timer } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import DropdownMenuDemo from "./TaskActions";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Loading from "./Loading";

export const TaskItems = createContext(null);
const Tasklist = ({ today }) => {
  
  if (!today) {
    return <Loading />;
  }

  return (
    <div className = "flex justify-between gap-1">
      <div className="mt-4 flex flex-wrap w-full px-1  gap-2 ">
        {today &&
          today.map((items, index) => (
            <div
            
              className="tasks_content w-80 h-22 my-1 py-2 cursor-pointer px-4 flex gap-4 items-center justify-center rounded-xl"
            >
              <Checkbox />
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <Link   href = {`/today/${items?._id}`} className="text-[#352e5d] mb-0.5 font-medium">
                    {items?.title}
                  </Link>
                  <TaskItems.Provider value={today}>
                    <DropdownMenuDemo />
                  </TaskItems.Provider>
                </div>
                <p className="text-sm text-slate-500">{items?.description}</p>
                <div className="time flex gap-2 text-sm items-center mt-1  ">
                  <div className="flex items-center gap-1">
                    <p className="text-white bg-green-500 text-[10px] px-1  rounded-md">
                      {items?.status}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/comment.svg"
                      alt="time"
                      width={15}
                      height={15}
                    />
                    <p className="text-slate-600">
                      {items?.comment?.length > 1 ? "1 comment" : "0 comment"}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/history.svg"
                      alt="time"
                      width={15}
                      height={15}
                    />
                    <p className="text-slate-600">
                      {items?.currentHours}:{items?.currentMinute}{" "}
                      {items?.currentHours < 12 ? "AM" : "PM"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tasklist;
