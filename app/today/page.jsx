import React from 'react'
import { SignOutButton } from '@clerk/nextjs'
const Today = () => {
  return (
    <div>Today
      <SignOutButton>Signout</SignOutButton>
    </div>
  )
}

export default Today