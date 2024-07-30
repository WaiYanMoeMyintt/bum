import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2.5 ">
      <div className="flex gap-2 items-center justify-center text-center">
        <Image src="/logo.png" width={35} height={35} alt="bumbum" />
        <h3>BumBum</h3>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Link href="#features" className = "hover:bg-slate-200 py-1 px-2 rounded-md transition-all">Features</Link>
        <Link href="#features" className = "hover:bg-slate-200 py-1 px-2 rounded-md transition-all">Pricing</Link>
        <Link href="#features" className = "hover:bg-slate-200 py-1 px-2 rounded-md transition-all">For Student</Link>
        <Link href="#features" className = "hover:bg-slate-200 py-1 px-2 rounded-md transition-all">Login</Link>
        
        <SignInButton>
        <Button className = "nav_primary_btn hover:bg-indigo-700 transition-all ">Start for free</Button>
        </SignInButton>
    
      </div>
    </nav>
  );
};

export default Nav;
