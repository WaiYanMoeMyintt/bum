"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Pencil, House } from "lucide-react";
import Link from "next/link";
import { statusList } from "@/lib/status";
import { Skeleton } from "@/components/ui/skeleton";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
const TaskItemsId = ({ params }) => {
    const { user } = useUser();
  const [task, setTask] = useState();
  const { id } = params;
  console.log(task?.topics);
  const [status, setStatus] = useState("Doing");

  if (!id) {
    return <div>Loading.....</div>;
  }
  useEffect(() => {
    const fetchTaskID = async () => {
      try {
        const apiRoute = `/api/today_list/${id}`;
        const resData = await axios.get(apiRoute);
        setTask(resData.data);
      } catch (err) {
        return err.message;
      }
    };
    fetchTaskID();
  }, [id]);

  // Refs for inputs
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const commentRef = useRef(null);

  const updateTaskList  = async (event)=>{
    event.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const comment = commentRef.current.value;
    if(title && description){
        try {
            const apiRoute = `/api/today_list/${id}`;
            const updateData = await axios.put(apiRoute, {
                title: title,
                description: description,
                status: status,
                comment: comment
              });
            window.location.reload();
            console.log(updateData)
           }
           catch (err){
            return err.message;
           }
    }
  }

  return (
    <>
      <div className="today_content w-100 ">
        <div className="today_title flex gap-2 items-center">
          <p className="text-[#726c8d] text-sm">General </p>
          <p className="bg-[#726c8d] w-1 h-1 rounded-full"> </p>
          <p className="text-[#726c8d] text-sm">Today</p>
        </div>
        <div className="today_subtitle mt-4">
          <Link
            href="/today"
            className=" text-[#7367a7] font-semibold text-xl hover:underline"
          >
            Today.
          </Link>
        </div>
        <hr className="mt-2 shadow-md" />
      </div>

      <div className="py-2 max-w-[886px] rounded-lg shadow-sm mt-2">
        <div className="detail_title ">
          <h3 className="text-[#1a125c] font-semibold mb-4 flex gap-1 items-center">
            <p>Task Details</p>
          </h3>
        </div>

        {task?.topics && (
          <div className="tasks_content px-4 mt-4 bg-[#fff] py-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center gap-1">
              <p className="text-sm text-slate-800 mb-2.5">My work Task</p>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-slate-50 shadow-sm cursor-pointer rounded-full w-8 h-8 flex items-center justify-center">
                    <Pencil size={15} />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                  </DialogHeader>
                  <form onSubmit = {updateTaskList}>
                    <div className="grid gap-4 py-2">
                      <div className="w-full flex flex-col gap-4">
                        <div>
                          <Label htmlFor="name" className="text-right">
                            Task Title
                          </Label>
                          <Input
                            id="name"
                            placeholder="e.g. Going to book shop"
                            className="col-span-3 mt-2 text-slate-700 text-sm"
                            ref={titleRef}
                          />
                          {/* <p className = {`${!titleErr ? "text-red-500 text-sm mt-0.5 hidden" : "text-red-500 text-sm mt-0.5 block"} `}>Title is missing</p> */}
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-4">
                        <div>
                          <Label
                            htmlFor="description"
                            className="text-right mb-2"
                          >
                            Task Description
                          </Label>
                          <Textarea
                            placeholder="e.g. Buy comic books"
                            className="mt-2"
                            ref={descRef}
                          />
                          {/* <p className = {`${!descErr ? "text-red-500 text-sm mt-0.5 hidden" : "text-red-500 text-sm mt-0.5 block"} `}>Description is missing</p> */}
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <Label htmlFor="status" className="text-left">
                          Status
                        </Label>
                        <Select  value={status} onValueChange={setStatus}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="On Going" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Your Task Status</SelectLabel>
                              {statusList &&
                                statusList.map((items, index) => (
                                  <SelectItem key={index} value={items?.name}>
                                    {items?.name}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="comment" className="text-right">
                          Add comment
                        </Label>
                        <Input
                          id="comment"
                          placeholder="e.g. buy budget (optional)"
                          className="col-span-3 mt-2 text-slate-700 text-sm"
                            ref={commentRef}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="bg-indigo-600 w-full hover:bg-indigo-800"
                      >
                        Update Task
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <h2 className="text-[#1a125c] text-lg font-semibold">
              {task?.topics?.title}
            </h2>
            <p className="text-sm text-[#1a125c] leading-6 mt-2.5 ">
              {task?.topics?.description}
            </p>

            <div className="mt-4  flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <p className="text-slate-700 text-sm">Time</p>
                <h4 className="text-[#1a125c] text-sm font-semibold">
                  {task?.topics?.currentHours}: {task?.topics?.currentMinute}{" "}
                  {task?.topics?.currentHours > 12 ? "PM" : "AM"}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-700 text-sm">Assignee</p>
                <h4 className="text-[#1a125c] text-sm font-semibold">
                  {!user ? <p>BumBum</p> : <p>{user?.fullName}</p>}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-slate-700 text-sm">Group</p>
                <h4 className="text-[#1a125c] text-sm font-semibold">Today</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskItemsId;
