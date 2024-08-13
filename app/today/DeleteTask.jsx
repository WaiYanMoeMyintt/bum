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
export default function DeleteTask({ onClose }) {
  const today = useContext(TaskItems);
  const [id, setId] = useState("");

  useEffect(() => {
    today?.map((items, index) => {
      console.log(items?._id);
      setId(items?._id);
    });
  }, [today]);
  const deleteTaskItems = async () => {
    if (today) {
      try {
        const api = `/api/today_list/${id}`;
        const getData = await axios.delete(api, {
          _id: id,
        });
        window.location.reload();
        consoel.log(getData);
      } catch (err) {
        return err.message;
      }
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
