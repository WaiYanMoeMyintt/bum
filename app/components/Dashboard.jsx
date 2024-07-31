'use client';
import React from 'react'
import { SignOutButton, useUser} from '@clerk/nextjs'
import Sidebar from './Sidebar';
import GeneralList from './GeneralList';
import DetailsView from './DetailsView';
const Dashboard = () => {
  const {user}  = useUser();

  return (
    <div className = "flex justify-between  h-full">
        <Sidebar />
        <GeneralList />
        <DetailsView />
    </div>
  )
}

export default Dashboard