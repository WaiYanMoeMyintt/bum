import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Timer } from "lucide-react";
import Image from "next/image";

const Tasklist = () => {
  const date = new Date();
  return (
    <div className="mt-4">
      <div className="tasks_content  w-96 py-2 cursor-pointer px-4 flex gap-4 items-center rounded-xl">
        <Checkbox />
        <div className="">
          <h3 className="text-[#352e5d] mb-0.5">Learn a Python</h3>
          <p className="text-sm text-slate-500">Watch tutorial on youtube</p>
          <div className="time flex gap-2 text-sm items-center mt-2.5 ">
            <div className="flex items-center gap-1">
              <Image src="/time.svg" alt="time" width={15} height={15} />
              <p className="text-slate-600">Tue</p>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/comment.svg" alt="time" width={15} height={15} />
              <p className="text-slate-600">0 comment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;