// If you prefer not to use useState for better performance, consider using Jotai instead; this way, the components remain server-side rendered . I used useState here for simplicity.
import React from 'react'
import NavBar from '../others/navbar'
import Component from './component'

const HomePage = () => {
 
  return (
    <main className="flex min-h-screen flex-col bg-[#EFF2F5]  ">
     <NavBar/>
     <Component/>
    </main>
  )
}

export default HomePage