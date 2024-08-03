'use client';
import React, {useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BumBumContext } from "../context/BumBum";
const GeneralList = () => {
  const {children} = useContext(BumBumContext);
  console.log(children);

  return (
    <div>
      <h2>General</h2>
      {children}
      {/* Example button to navigate to Today page */}
    </div>
  );
};

export default GeneralList;
