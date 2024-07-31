import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <div className="mt-12 px-4 py-2.5">
      <div className="w-full flex items-end justify-center pointer-events-none">
        <Image src="/banner.png" alt="banner" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Profile;
