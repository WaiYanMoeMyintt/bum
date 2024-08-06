'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { CirclePlus, Plus } from 'lucide-react';
const CurrentDate = () => {
    const date = new Date();
  return (
    <div>
        <div className = "task_list flex mt-4 items-center justify-between">
             <div className = "greeting">
                <h3 className = "text-[#352e5d] font-semibold ">Today, {date.getDate()} {date.toLocaleDateString('en-US', { month: 'short' })}</h3>
             </div>
             <div className = "task_button">
                <Button className= "w-full nav_primary_btn hover:bg-indigo-700 transition-all  py-1.5 px-2.5 rounded-md">
                  <Plus className = "mr-1" /> New Task</Button>
             </div>
        </div>
    </div>
  )
}

export default CurrentDate