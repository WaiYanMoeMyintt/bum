"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2.5 md:border-0 sm:border-b shadow-sm">
        <Link  href = "/" className="flex gap-2 items-center justify-center text-center">
          <Image src="/logo.png" width={35} height={35} alt="bumbum" />
          <h3>BumBum</h3>
        </Link>
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
          <SignInButton
            className="hover:bg-slate-200 py-1 px-2.5 rounded-md transition-all"
          >
            Login
          </SignInButton>

          <SignUpButton>
            <Button className="nav_primary_btn hover:bg-indigo-700 transition-all">
              Start for free
            </Button>
          </SignUpButton>
        </div>
        <div
          onClick={()=> setMenu(!menu)}
          className="cursor-pointer sm:flex md:hidden hover:bg-slate-100 py-1 px-2 rounded-md transition-all"
        >
          <Image src="/menu.svg" width={25} height={25} alt="menu" />
        </div>
      </nav>
      {menu && (
        <div className="px-4 py-2.5  inset-0 overflow-hidden shadow-md">
          <div className="flex flex-col gap-4 w-full">
            <Link
              href="#features"
              className="hover:bg-slate-200 py-2 px-2 rounded-md transition-all"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="hover:bg-slate-200 py-2 px-2 rounded-md transition-all"
            >
              Pricing
            </Link>
            <Link
              href="#student"
              className="hover:bg-slate-200 py-2 px-2 rounded-md transition-all"
            >
              For Student
            </Link>
          </div>
          <div className="w-full border-b my-2.5"></div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <SignInButton className="bg-slate-200 text-black hover:bg-slate-300 transition-all w-full py-2 px-2 rounded-md">
              Login
            </SignInButton>
            <SignUpButton className="w-full nav_primary_btn hover:bg-indigo-700 transition-all  py-2 px-2 rounded-md ">
              Start for free
            </SignUpButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
