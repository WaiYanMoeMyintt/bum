"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import useSWR, { mutate } from "swr";
import Tasklist from "./Tasklist";
import { statusList } from "@/lib/status";
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
import axios from "axios";

const CurrentDate = () => {
  const date = new Date();
  const [task, setTask] = useState();
  const [status, setStatus] = useState();

  //implement swr
  // Fetcher function for SWR
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/today_list", fetcher, {
    refreshInterval: 3000,
  });

  // Refs for inputs
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const commentRef = useRef(null);
  
  console.log(status);
  //callback function

  // Handler for form submission
  const handleCreateTask = async (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const comment = commentRef.current.value;
    try {
      const api = "/api/today_list";
      const postData = await axios.post(api, {
        headers: {
          "Content-type": "application/json",
        },
        title: title,
        description: description,
        comment: comment,
        status: status
      });
      console.log(postData.data);
      window.location.reload();
    } catch (err) {
      return err.message;
    }
  };

  useEffect(() => {
    const fetchingTasks = async () => {
      try {
        const url = "/api/today_list";
        const fetchData = await axios.get(url);
        setTask(fetchData?.data);
      } catch (err) {
        return err.message;
      }
    };

    fetchingTasks();
  }, []);
  console.log(task);
  return (
    <>
      <div>
        <div className="task_list flex mt-4 items-center justify-between">
          <div className="greeting">
            <h3 className="text-[#352e5d] font-semibold ">
              Today, {date.getDate()}
              {date.toLocaleDateString("en-US", { month: "short" })}
            </h3>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="nav_primary_btn hover:bg-indigo-700 transition-all py-1.5 px-2.5 rounded-md">
                <Plus className="mr-1" /> New Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Task</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <form>
                <div className="grid gap-4 py-4">
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
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div>
                      <Label htmlFor="description" className="text-right mb-2">
                        Task Description
                      </Label>
                      <Textarea
                        placeholder="e.g. Buy comic books"
                        className="mt-2"
                        ref={descRef}
                      />
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
                          {
                            statusList && statusList.map((items,index)=>(
                              <SelectItem key = {index} value={items?.name}>{items?.name}</SelectItem>
                            ))
                          }
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
                    onClick={handleCreateTask}
                    type="submit"
                    className="bg-indigo-600 w-full hover:bg-indigo-800"
                  >
                    Create Task
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Tasklist today = {task?.today} />
    </>
  );
};

export default CurrentDate;
