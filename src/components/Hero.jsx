import React from 'react'
import img from '../assets/img1.jpg'
import arrow from '../assets/arrow.png'
import { MdOutlineParagliding } from 'react-icons/md'
import { FaPeopleCarry } from 'react-icons/fa'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { IoOptionsOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'

const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-black lg:h-[80vh]"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="3000"
      >
        <img src={img} alt="" className="absolute h-full w-full object-cover" />
        <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto">
          <span className="lg:text-5xl text-3xl text-white text-center font-bold relative">
            Where Would You Like To Go?
            <div className="bg-orange text-white text-lg -left-8 px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]">
              Let's Explore
            </div>
          </span>
          <p className="text-white text-center text-2xl my-8 ">
            Checkout Beautiful Places Around the World.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg lg:flex items-center justify-between w-full">
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <MdOutlineParagliding className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-gray-600 text-sm ">Location</p>
                <select name="" id="" className="focus:outline-none">
                  <option value="">Locations</option>
                </select>
              </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaPeopleCarry className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-gray-600 text-sm ">Type</p>
                <select name="" id="" className="focus:outline-none">
                  <option value="">Booking type</option>
                </select>
              </div>
            </div>

            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaRegCalendarAlt className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-gray-600 text-sm ">Date from</p>
                <input type="date" className="focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaUsers className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full">
                <p className="text-gray-600 text-sm ">Guests</p>
                <input
                  type="number"
                  min="0"
                  className="focus:outline-none w-16"
                />
              </div>
            </div>
            <div className="flex items-center mr-4 lg:mt-0 mt-4">
              <IoOptionsOutline className="lg:block hidden text-green text-3xl mr-2" />
              <button
                className="bg-green text-white flex items-center justify-center gap-4 px-6 py-3 outline-none border-none rounded-lg font-semibold text-sm w-full

              "
              >
                <CiSearch size={20} /> Search
              </button>
            </div>
          </div>
          <img
            src={arrow}
            alt=""
            className="lg:block hidden my-4 -ml-96 "
            style={{ height: '100px', width: 'auto' }}
          />
          <p className="text-white font-semibold lg:text-3xl text-xl lg:py-0 py-8">
            Or browse the selected type
          </p>
        </div>
      </section>
    </div>
  )
}

export default Hero
