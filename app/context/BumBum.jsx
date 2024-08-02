"use client";
import React, { createContext, useState } from "react";
import HomePage from "../components/home/HomePage";
import { useAuth } from "@clerk/nextjs";
import Dashboard from "../components/Dashboard";
export const BumBumContext = createContext();

const BumBum = ({ children }) => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [hover, setHover] = useState(1);
  console.log(userId);
  return (
    <BumBumContext.Provider value= {{hover,setHover}}>
      {children}
      {!userId && <HomePage />}
      {userId && <Dashboard />}
    </BumBumContext.Provider>
  );
};

export default BumBum;