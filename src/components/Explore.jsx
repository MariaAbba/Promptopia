import React from 'react'
import { FaPlaneSlash, FaVest } from 'react-icons/fa'
import { RiPlanetLine } from 'react-icons/ri'
import { TbReportMoney } from 'react-icons/tb'
import bg from '../assets/img1.jpg'

const why_us = [
  {
    text: 'Safety first',
    icons: <FaVest size={60} />,
  },
  {
    text: 'Low price & Friendly',
    icons: <TbReportMoney size={60} />,
  },
  {
    text: 'Trusted travel guide',
    icons: <FaPlaneSlash size={60} />,
  },
]

const Explore = () => {
  return (
    <div>
      <div className="px-3">
        <div className='max-w-[1320px] mx-auto bg-[url("./src/assets/clouds.png")] bg-green bg-no-repeat bg-cover rounded-[10px] relative z-10 lg:mb-0 -mb-24'>
          <div className="lg:p-16 py-8 px-4 lg:flex justify-between items-center">
            <div className="flex items-center gap-4 lg:mb-0 mb-4">
              {/* <div> */}
              <RiPlanetLine size={50} color="white" />
              <span className="text-white">
                <p className="text-sm">Why you should choose us</p>
                <h4 className="lg:text-4xl text-2xl font-bold">
                  Ready to adventure and enjoy natural
                </h4>
              </span>
              {/* </div> */}
            </div>
              <button className="bg-white rounded-lg text-lg shadow  font-bold px-8 py-4 ">
                Explore More
              </button>
          </div>
        </div>
        <div className="lg:flex lg:-mt-20">
          <img
            src={bg}
            alt=""
            className="w-full lg:w-1/2 lg:h-auto h-[350px] object-cover"
          />

          <div className="lg:w-1/2 bg-[url('/bg-shape-07.png')] bg-no-repeat bg-cover lg:p-20 lg:pt-44 pr-4 py-20 px-3 bg-[#F3F8F6]">
            <div className="flex-col flex">
              <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                <h6 className="text-green relative font-semibold">
                  Why choose us
                </h6>
              </div>
              <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">
                Great opportunity for adventure & travels
              </h3>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              {why_us.map((item, index) => (
                <div key={item.text} className="flex items-center gap-4">
                  <span className="bg-green rounded-md p-4 text-white">
                    {item.icons}
                  </span>
                  <span className="lg:w-2/3">
                    <p className="font-bold text-xl pb-2">{item.text}</p>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, voluptatibus!
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
