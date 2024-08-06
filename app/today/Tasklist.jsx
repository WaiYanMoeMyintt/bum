import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Timer } from "lucide-react";
import Image from "next/image";
const Tasklist = () => {
  const date = new Date();
  console.log(date.getHours());
  return (
    <div className="mt-4">
      <div className="tasks_content  w-96 py-2 cursor-pointer px-4 flex gap-2 items-center rounded-xl">
        <Checkbox />
        <div className="">
          <h3>Learn a Python</h3>
          <p>watch tutorial on youtube</p>
          <div className = "time flex gap-1 items-center">
            <Image src="/time.svg" alt="time" width={20} height={20} />
            <p>Tue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
