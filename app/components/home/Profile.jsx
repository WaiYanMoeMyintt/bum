import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div className="mt-12 px-4 py-2.5">
      <div className="w-full flex items-end justify-center">
        <Image src="/banner.png" alt="banner" width={1000} height={1000} />
      </div>
      <div className  = "profile-title mt-8 w-full flex flex-col gap-4 items-center justify-center text-center ">
          <h2 className = "sm:text-2xl lg:text-3xl  font-bold">'Plan makes it easy to go as simple or as complex as you want'</h2>
          <h3 className = "text-xl font-bold">- Elon Musk</h3>
      </div>
    </div>
  );
};

export default Profile;
