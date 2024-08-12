import React from "react";

const TaskItemsId = () => {
  return (
    <div className=" h-screen w-full py-2 bg-[#fff] rounded-lg shadow-sm">
      <div className="detail_title px-4">
        <h3 className = "text-[#1a125c] font-semibold mb-4">Task Details</h3>
      </div>

      <div className="detail_content px-4 mt-6">
        <p className = "text-sm text-slate-800 mb-2.5">My work Task</p>
        <h2 className = "text-[#1a125c] text-lg font-semibold">Prepare CV Form</h2>
        <p className = "text-sm text-[#1a125c] leading-6 mt-2.5 ">
          Create a professional and tailored CV to showcase your skills,
          experience, and achievements. Please fill out the form below to help
          us craft a standout CV that aligns with your career goals
        </p>

        <div className = "mt-4  flex flex-col gap-5">
            <div className = "flex items-center gap-2">
                <p className = "text-slate-700 text-sm">Timeline</p>
                <h4 className = "text-[#1a125c] text-sm font-semibold">22 Aug 2024</h4>
            </div>
            <div className = "flex items-center gap-2">
                <p className = "text-slate-700 text-sm">Time</p>
                <h4 className = "text-[#1a125c] text-sm font-semibold">9:30 AM</h4>
            </div>
            <div className = "flex items-center gap-2">
                <p className = "text-slate-700 text-sm">Assignee</p>
                <h4 className = "text-[#1a125c] text-sm font-semibold">WaiYan MoeMyint</h4>
            </div>
            <div className = "flex items-center gap-2">
                <p className = "text-slate-700 text-sm">Group</p>
                <h4 className = "text-[#1a125c] text-sm font-semibold">Today</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItemsId;
