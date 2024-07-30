import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
const Intro = () => {
  return (
    <div className="sm:mt-20 md:mt-24 h-full flex flex-col justify-center items-center text-center">
      <h2 className="sm:text-2xl lg:text-5xl mb-2 font-bold intro_title">
        Simplify Your Schedule, <span className="intro">Amplify</span> Your Life
        and family.
      </h2>
      <p className="my-2.5 intro-message text-lg leading-8">
        Streamline your life and your team's workflow with the myanmar <br />
        leading task manager and to-do list app
      </p>
      <SignInButton>
        <Button className="nav_primary_btn hover:bg-indigo-700 transition-all ">
          Start for free
        </Button>
      </SignInButton>
    </div>
  );
};

export default Intro;
