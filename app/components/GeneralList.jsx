'use client';
import React, {useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BumBumContext } from "../context/BumBum";
const GeneralList = () => {
  const {children} = useContext(BumBumContext);

  return (
    <div className = "px-2 py-2.5  w-full">
      {children}
    </div>
  );
};

export default GeneralList;
