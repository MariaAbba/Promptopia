import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import logo from '../assets/logo2.png'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1d231f] pt-44">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="lg:flex gap-16 pb-20">
          <div className="flex items-center justify-between lg:pb-0 pb-8">
            <span className="flex gap-4 items-center lg:w-3/4">
              <img src="icon-headphone.png" alt="" />
              <p>Need any support for tour & travels? </p>
            </span>
            <div className="lg:w-1/4 lg:flex hidden justify-end">
              <button className="bg-green text-white rounded-full w-16 h-16 flex items-center justify-center">
                <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between lg:pb-0 pb-8">
            <span className="flex gap-4 items-center lg:w-3/4">
              <img src="icon-headphone.png" alt="" />
              <p>Need any support for tour & travels? </p>
            </span>
            <div className="lg:w-1/4 lg:flex hidden justify-end">
              <button className="bg-green text-white rounded-full w-16 h-16 flex items-center justify-center">
                <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src={logo} alt="" width={130} />
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center gap-2">
                <button className="rounded-full hover:bg-white hover:text-black bg-[#262d28]">
                  <BsTwitter size={14} />
                </button>
                <button className="rounded-full hover:bg-white hover:text-black bg-[#262d28]">
                  <FaFacebook size={14} />
                </button>
                <button className="rounded-full hover:bg-white hover:text-black bg-[#262d28]">
                  <BsInstagram size={14} />
                </button>
                <button className="rounded-full hover:bg-white hover:text-black bg-[#262d28]">
                  <BsLinkedin size={14} />
                </button>
              </div>
            </div>

            <div className='lg:w-1/5 text-white'
            >
              <h6 className='text-xl font-bold my-5 lg:mt-0'>Pages</h6>
              <ul className='flex flex-col gap-4'>
                <li>
                  <a href="#" className='hover:text-green'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className='hover:text-green'>
                    Community Blog
                  </a>
                </li>
                <li>
                  <a href="#" className='hover:text-green'>
                    Work with us 
                  </a>
                </li>
                <li>
                  <a href="#" className='hover:text-green'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className='hover:text-green'>
                    Contact US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
