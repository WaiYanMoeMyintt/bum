import React, { useState, useRef, useContext, useEffect } from "react";
import { Settings, Pencil } from "lucide-react";
import Image from "next/image";
import { statusList } from "@/lib/status";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { TaskItems } from "./Tasklist";
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
import DeleteTask from "./DeleteTask";
import axios from "axios";
export default function UpdateTask() {
  const today = useContext(TaskItems);
  const [id, setId] = useState("");

  useEffect(() => {
    today?.map((items, index) => {
      setId(items?._id);
    });
  }, [today]);

  console.log(id);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [status, setStatus] = useState("Doing");
  const [titleErr, setTitleErr] = useState();
  const [descErr, setDescErr] = useState();
  const [statusErr, setStatusErr] = useState();

  // Refs for inputs
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const commentRef = useRef(null);
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const taskItems = useContext(TaskItems);

  const updateTask = async (event) => {
    const title = titleRef?.current?.value;
    const description = descRef?.current?.value;
    const comment = commentRef?.current?.value;
    event.preventDefault();
    if (taskItems) {
      try {
        const api = `/api/today_list/${id}`;
        if (title && description) {
          const updateData = await axios.put(api, {
            title: title,
            description: description,
            status: status,
            comment: comment,
          });
          window.location.reload();
          return updateData;
        }
      } catch (err) {
        return err.message;
      }
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="outline-none bg-transparent hover:bg-transparent focus:outline-none border-none active:border-none">
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
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Edit Task Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full px-2 cursor-pointer flex bg-transparent text-black">
                  <Pencil className="mr-2 h-4 w-4" />
                  <span className="flex text-sm">Edit Task</span>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={updateTask}>
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
                      <Select value={status} onValueChange={setStatus}>
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
                      onClick={updateTask}
                      className="bg-indigo-600 w-full hover:bg-indigo-800"
                    >
                      Update Task
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={openDialog} className="cursor-pointer">
              <Image
                alt="trash"
                src="/task_trash.svg"
                width={10}
                height={10}
                className="mr-2 h-4 w-4"
              />
              <span className="text-red-400">Delete</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>

      {isDialogOpen && <DeleteTask onClose={closeDialog} />}
    </>
  );
}
