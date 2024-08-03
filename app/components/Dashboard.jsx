'use client';
import React from 'react'
import { SignOutButton, useUser} from '@clerk/nextjs'
import Sidebar from './Sidebar';
import GeneralList from './GeneralList';
import DetailsView from './DetailsView';
const Dashboard = ({children}) => {
  const {user}  = useUser();

  return (
    <div className = "flex justify-between  h-full">
        <Sidebar />
        {children}
        <GeneralList />
        <DetailsView />
    </div>
  )
}

export default Dashboard