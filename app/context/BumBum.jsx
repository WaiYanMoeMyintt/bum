'use client';
import React, {createContext} from 'react'
import HomePage from '../components/home/HomePage';
export const BumBumContext  =  createContext();

const BumBum = () => {
  return (
      <BumBumContext.Provider value = "">
          <HomePage />
      </BumBumContext.Provider>
  )
}

export default BumBum