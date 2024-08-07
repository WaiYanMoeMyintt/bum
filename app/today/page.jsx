"use client";
import React ,{useState, useEffect}  from "react";
import CurrentDate from "./CurrentDate";
import Tasklist from "./Tasklist";
import axios from "axios";
const Today = () => {
  const [today, setToday]  = useState();
  useEffect(()=>{
      const api = "/api/today_list";
      const getCurrentTodayList = async ()=>{
           try {
              const getData = await axios.get(api);
              setToday(getData?.data?.today);
           }
           catch (err){
              return err.message;
           }
      }
      getCurrentTodayList();
  },[]);




  return (
    <div className="today_content w-100 ">
      <div className="today_title flex gap-2 items-center">
        <p className = "text-[#726c8d] text-sm">General  </p>
        <p className = "bg-[#726c8d] w-1 h-1 rounded-full">  </p>
        <p className = "text-[#726c8d] text-sm">Today</p>
      </div>
      <div className="today_subtitle mt-4">
        <h3 className = "text-[#352e5d] font-semibold text-xl">Todo</h3>
      </div>
      <hr className = "mt-2 shadow-md" />

      <CurrentDate />
      <Tasklist today = {today}/>
    </div>
  );
};

export default Today;
