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

  const deleteTaskItems = async () => {
    if (today) {
      try {
        const api = "/api/today_list";
        const getData = await axios.delete(api, {
          data: {
            title: today?.map((items) => {
              return items?.title;
            }),
          },
        });
        window.location.reload();
        console.log(getData);
        if (!res.ok) {
          return "Fail!";
        }
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
