"use client";
import React, { useState, useRef, useEffect } from "react";
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
  import { statusList } from "@/lib/status";
const Dialog = () => {
    const date = new Date();
    const [task, setTask] = useState();
    const [status, setStatus] = useState("Doing");
    const [titleErr, setTitleErr] = useState();
    const [descErr, setDescErr] = useState();
    const [statusErr, setStatusErr] = useState(); 
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="nav_primary_btn hover:bg-indigo-700 transition-all py-1.5 px-2.5 rounded-md">
        <Plus className="mr-1" /> New Task
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add New Task</DialogTitle>
      </DialogHeader>
      <form>
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
                <p className = {`${!titleErr ? "text-red-500 text-sm mt-0.5 hidden" : "text-red-500 text-sm mt-0.5 block"} `}>Title is missing</p>
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
             <p className = {`${!descErr ? "text-red-500 text-sm mt-0.5 hidden" : "text-red-500 text-sm mt-0.5 block"} `}>Description is missing</p>
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
  )
}

export default Dialog