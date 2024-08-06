"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const CurrentDate = () => {
  const date = new Date();
  return (
    <div>
      <div className="task_list flex mt-4 items-center justify-between">
        <div className="greeting">
          <h3 className="text-[#352e5d] font-semibold ">
            Today, {date.getDate()}{" "}
            {date.toLocaleDateString("en-US", { month: "short" })}
          </h3>
        </div>
        <Dialog className="task_button">
          <DialogTrigger asChild>
            <Button className=" nav_primary_btn hover:bg-indigo-700 transition-all  py-1.5 px-2.5 rounded-md">
              <Plus className="mr-1" /> New Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="w-full flex flex-col gap-4">
                <div>
                  <Label htmlFor="name" className="text-right">
                    Task Title
                  </Label>
                  <Input
                    id="name"
                    defaultValue="e.g. Going to book shop"
                    className="col-span-3 mt-2 text-slate-700 text-sm"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col  gap-4">
              <div>
                  <Label htmlFor="name" className="text-right">
                    Task Description
                  </Label>
                  <Input
                    id="name"
                    defaultValue="e.g. to buy comic books"
                    className="col-span-3 mt-2 text-slate-700 text-sm"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className = "bg-indigo-600 w-full hover:bg-indigo-800">Create Task</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CurrentDate;
