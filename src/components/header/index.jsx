import React from 'react'
import Logo from '../extras/Logo'

const Header = () => {
  return (
    <div className="bg-[url('/public/assets/header.jpg')] text-white bg-center h-screen bg-cover bg-no-repeat w-screen">
      <div className="absolute bg-[#000] opacity-75 h-screen w-screen">
            <div className="w-[80vw] mx-auto flex justify-between mt-[5vh]">
               <Logo /> 
               <h2>Hello world</h2> 
               <h2>Hello world</h2> 
            </div>
      </div>
    </div>
  )
}

export default Header
