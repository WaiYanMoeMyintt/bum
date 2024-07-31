"use client";
import React, { createContext } from "react";
import HomePage from "../components/home/HomePage";
import { useAuth } from "@clerk/nextjs";
import Dashboard from "../components/Dashboard";
export const BumBumContext = createContext();

const BumBum = ({ children }) => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(userId);
  return (
    <BumBumContext.Provider value="">
      {children}
      {!userId && <HomePage />}
      {userId && <Dashboard />}
    </BumBumContext.Provider>
  );
};

export default BumBum;