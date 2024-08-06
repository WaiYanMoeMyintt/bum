'use client';
import React from 'react'
const CurrentDate = () => {
    const date = new Date();
    console.log(date.getDate());
  return (
    <div>
        <div className = "create_tasks">
             <div className = "greeting">

             </div>
        </div>
    </div>
  )
}

export default CurrentDate