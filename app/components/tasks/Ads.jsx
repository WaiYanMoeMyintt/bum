import React from "react";
import { Button } from "@/components/ui/button";
const Ads = () => {
  return (
    <div className = "mt-8 bg-indigo-600 rounded-2xl p-2">
      <h3 className = " text-white  font-semibold mb-4 ml-2">Upgrade Now</h3>
      <p className = "text-slate-400 text-sm leading-4 mb-2 ml-2">
        View benefits you can explore, <br /> feel the pro featuers
      </p>

      <Button className = "w-full sidebar_content text-black hover:bg-slate-100   py-1 mt-2.5">Buy Pro</Button>
    </div>
  );
};

export default Ads;
