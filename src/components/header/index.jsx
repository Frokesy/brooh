import React from 'react'
import Logo from '../extras/Logo'
import { FaGithub, FaInstagram, FaTwitter, FaBars } from 'react-icons/fa'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div className="bg-[url('/public/assets/header.jpg')] text-white bg-center h-[98vh] bg-cover bg-no-repeat w-screen">
      <div className="absolute bg-[#000] opacity-75 h-[98vh] w-screen">
            <div className="lg:w-[80vw] w-[90vw] mx-auto flex justify-between items-center mt-[2vh]">
               <Logo /> 
                <div className="lg:flex hidden justify-between text-[14px] font-[Montserrat] items-center space-x-14">
                    <span>Home</span>
                    <span>Tech</span>
                    <span>Politics</span>
                    <span>Entertainment</span>
                    <span>Life</span>
                    <span>NFTs</span>

                </div> 
                <div className="lg:flex hidden space-x-6 text-[14px] items-center">
                    <FaTwitter />
                    <FaInstagram />
                    <FaGithub />
                </div>

             {/**Mobile Navbar */}   
          <div className="lg:hidden md:hidden items-center">
            <span ref={btnRef} onClick={onOpen} className="text-[18px] text-amber-500">
                <FaBars />
            </span>
        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay
          px={4}
          size='md'
          />
          <DrawerContent
          bg='#1a0f00'
          >
            <div className="text-red-500 mt-4 mb-10 flex justify-end w-[95vw] text-[13px]"><DrawerCloseButton /></div>
            <DrawerBody
            >
            <div className="w-[90vw] mx-auto gap-x-10 gap-y-6 font-mono text-gray-300 text-[15px] grid grid-cols-3 mb-10">
                    <span>
                        Home
                    </span>
                    <span>
                        Tech
                    </span>
                    <span>
                        Politics
                    </span>
                    <span>
                        NFTs
                    </span>
                    <span>
                        Life
                    </span>
                    <span>
                        Entertainment
                    </span>
            </div>
            </DrawerBody>
          </DrawerContent>
            
        </Drawer>
        </div>
            </div>
      </div>
    </div>
  )
}

export default Header
