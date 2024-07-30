"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2.5 md:border-0 sm:border-b shadow-sm">
        <div className="flex gap-2 items-center justify-center text-center">
          <Image src="/logo.png" width={35} height={35} alt="bumbum" />
          <h3>BumBum</h3>
        </div>
        <div className="sm:hidden md:flex gap-4 items-center justify-center ">
          <Link
            href="#features"
            className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
          >
            Features
          </Link>
          <Link
            href="#features"
            className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
          >
            Pricing
          </Link>
          <Link
            href="#features"
            className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
          >
            For Student
          </Link>
          <Link
            href="#features"
            className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
          >
            Login
          </Link>

          <SignInButton>
            <Button className="nav_primary_btn hover:bg-indigo-700 transition-all">
              Start for free
            </Button>
          </SignInButton>
        </div>
        <div
          onClick={()=> setMenu(!menu)}
          className="cursor-pointer sm:flex md:hidden hover:bg-slate-100 py-1 px-2 rounded-md transition-all"
        >
          <Image src="/menu.svg" width={25} height={25} alt="menu" />
        </div>
      </nav>
      {menu && (
        <div className="px-4 py-2.5 mt-4 bg-slate-100 h-full inset-0">
          <div className="flex flex-col gap-4 w-full">
            <Link
              href="#features"
              className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
            >
              Pricing
            </Link>
            <Link
              href="#student"
              className="hover:bg-slate-200 py-1 px-2 rounded-md transition-all"
            >
              For Student
            </Link>
          </div>
          <div className="w-full border-b my-2.5"></div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <Button className="bg-slate-200 text-black hover:bg-slate-300 transition-all w-full ">
              Login
            </Button>
            <Button className="w-full nav_primary_btn hover:bg-indigo-700 transition-all ">
              Start for free
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
