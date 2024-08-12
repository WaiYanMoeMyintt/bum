"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TaskItems } from "./Tasklist";
export default function AlertDialogDemo({ onClose }) {
  const today = useContext(TaskItems);
console.log(today)
  const deleteTaskItems = async () => {
    if (today) {
      try {
        const api = "/api/today_list";
        const getData = await axios.delete(api, {
         _id:today?.map((items) => {
            return items?._id;
          }),
        })
        consoel.log(getData)
        window.location.reload();
      } catch (err) {
        return err.message;
      }
      deleteTaskItems();
    }
  };

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your task
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={deleteTaskItems}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}