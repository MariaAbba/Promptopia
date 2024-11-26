import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import img from './../assets/img1.jpg'
import { BsPlay } from 'react-icons/bs'
import Accordion from './Accordion'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Tour = () => {
  return (
    <div>
      <section>
        <div className="max-w-[1320px] mx-auto lg:-mt-20 mb-10 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg]">
          <div className="w-full  relative lg:w-1/2 lg:mt-0 -mt-24 z-10 lg:px-0 px-3">
            <img
              src={img}
              alt=""
              className="w-full h-64 lg:h-full rounded-md object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-green animate-pulse text-white rounded-full p-8">
                <BsPlay size={30} />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-24 lg:px-12 px-3">
          <div className="relative w-fit px-8 py-2 flex items-center justify-center">
            <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
            <h6 className="text-green relative font-semibold"> Availability</h6>
          </div>
          <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">
            Enjoy real adventure
          </h3>
          {Accordion}
        </div>
      </section>
    </div>
  )
}

export default Tour
