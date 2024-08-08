import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Timer } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Tasklist = ({ today }) => {
  const date = new Date();

  if (!today) {
    return <div>Loading</div>;
  }

  return (
    <div className="mt-4 flex items-center  px-1  gap-2 flex-wrap flex-1 w-full">
      {today &&
        today.map((items, index) => (
          <div className="tasks_content w-96 h-22 my-1 py-2 cursor-pointer px-4 flex gap-4 items-center rounded-xl">
            <Checkbox />
            <div className="w-full">
              <div className="flex justify-between items-centerw-full">
                <h3 className="text-[#352e5d] mb-0.5">{items?.title}</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src="/three_dots.svg"
                        alt="time"
                        width={20}
                        height={20}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>More task actions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-sm text-slate-500">{items?.description}</p>
              <div className="time flex gap-2 text-sm items-center mt-2.5 ">
                <div className="flex items-center gap-1">
                  <p className="text-white bg-green-500 text-[10px] px-1  rounded-md">
                    {items?.status}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/comment.svg" alt="time" width={15} height={15} />
                  <p className="text-slate-600">
                    {items?.comment?.length > 1 ? "1 comment" : "0 comment"}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/history.svg" alt="time" width={15} height={15} />
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
  );
};

export default Tasklist;
