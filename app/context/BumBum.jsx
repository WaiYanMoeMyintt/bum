'use client';
import React, {createContext} from 'react'
import HomePage from '../components/home/HomePage';
export const BumBumContext  =  createContext();
import Image from 'next/image';
const BumBum = () => {
  return (
      <BumBumContext.Provider value = "">
          <HomePage />
          {/* <Image src = "/banner.png" alt = "banner" width = {500} height = {500}/> */}
      </BumBumContext.Provider>
  )
}

export default BumBum