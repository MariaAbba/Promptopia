import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { IoMdMenu } from 'react-icons/io'
import logo from './../assets/logo2.png'

const Header = () => {
  const [dropdown, setDropdown] = useState(false)

  const showDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-center justify-between items-center gap-16">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src={logo} alt="logo" className="w-20" />
            </div>
          </div>
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#home"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Home
            </a>
            <a
              href="#tours"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Tours
            </a>
            <a
              href="#destinations"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Destinations
            </a>
            <a
              href="#news"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              News
            </a>
            <a
              href="#page"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Pages
            </a>
            <a
              href="#contact"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Contacts
            </a>
          </ul>
          <div className="flex gap-4 max-lg:hidden w-40 justify-center">
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
              <CiSearch size={32} />
            </button>
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center  hover:bg-green hover:text-white">
              <IoPersonCircleOutline size={24} />
            </button>
          </div>
          {dropdown ? (
            <div
              className="lg:hidden text-2xl cursor-pointer text-black"
              onClick={showDropdown}
            >
              <IoClose className="text-white  hover:text-green " />
            </div>
          ) : (
            <div
              className="lg:hidden text-2xl cursor-pointer text-black"
              onClick={showDropdown}
            >
              <IoMdMenu className="text-white  hover:text-green " />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-24 bg-white transition-all ">
            <div className="w-full flex flex-col  items-baseline gap-4">
              <ul className="w-full flex flex-col justify-center items-center">
                <a
                  href="#home"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Home
                </a>
                <a
                  href="#tours"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Tours
                </a>
                <a
                  href="#destinations"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Destinations
                </a>
                <a
                  href="#news"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  News
                </a>
                <a
                  href="#page"
                  className="leading-normal no-underline text-white text-lg hover:text-green"
                >
                  Pages
                </a>
                <a
                  href="#contact"
                  className="leading-normal no-underline text-white text-lg hover:text-green"
                >
                  Contacts
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
