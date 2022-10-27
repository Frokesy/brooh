import React from 'react'
import NavBar from './NavBar'


const Header = () => {
    
  return (
    <div className="bg-[url('/public/assets/header.jpg')] text-white bg-center h-[98vh] bg-cover bg-no-repeat w-screen">
            <div className="absolute bg-[#000] opacity-80 h-[98vh] w-screen">

        <NavBar />

        <div className="w-[80vw] mx-auto flex flex-col pt-[45vh]">
            <h1 className="text-[40px] font-[Montserrat] font-bold">The Future of <br /> <span className="text-amber-500">Technology</span> is Here</h1>
            <div className="flex space-x-4 mt-3 items-center">
                <span className="bg-amber-500 text-white px-3 py-1 text-[13px]">Tech</span>
                <span>29 August, 2021</span>
            </div>
            <p className="mt-4 text-[18px] max-w-[50vw]">
                Last week, the world&apos;s largest cryptocurrency exchange, Binance, announced that it would be launching a decentralized exchange (DEX) on the Binance Smart Chain (BSC). The new DEX will be called Venus and will be a decentralized version of Binance&apos;s centralized exchange.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Header
