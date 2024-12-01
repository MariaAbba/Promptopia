import React, { useState } from 'react'
import { BsTrainLightrailFront } from 'react-icons/bs'
import { FaBiking, FaBusAlt } from 'react-icons/fa'
import { GiWoodenPier } from 'react-icons/gi'
import { IoArrowForward } from 'react-icons/io5'
import { LiaWarehouseSolid } from 'react-icons/lia'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import image01 from './../assets/img-01.jpg'
import image02 from './../assets/img-02.jpg'
import image03 from './../assets/img-03.jpg'
import image04 from './../assets/img-04.jpg'
import image05 from './../assets/img-05.jpg'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const offers = [
  {
    icon: <LiaWarehouseSolid />,
    image: image01,
    text: 'Tent Camping',
  },
  {
    icon: <BsTrainLightrailFront />,
    image: image02,
    text: 'Glamping Cabin',
  },
  {
    icon: <FaBusAlt />,
    image: image03,
    text: 'RV Caravan Trailers',
  },
  {
    icon: <GiWoodenPier />,
    image: image04,
    text: 'Adventure and climbing',
  },
  {
    icon: <FaBiking />,
    image: image05,
    text: 'Mountain climbing',
  },
]

const Offers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="bg-[url('/assets/bg-02.jpg')] pb-24">
      <div className="max-w-[1320px] mx-auto py-24">
        <div className="flex flex-col items-center">
          <div className="relative w-fit px-8 py-2 flex items-center justify-center">
            <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
            <h6 className="text-orange relative font-semibold">
              What we offering!
            </h6>
          </div>
          <h3 className="lg:text-5xl text-3xl font-bold pb-8 text-white lg:w-4/5 text-center py-4">
            Feel real adventure and very close to nature.
          </h3>
        </div>

        <div className="py-8">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            itemClass="pb-6 px-2"
          >
            {offers.map((offer, index) => (
              <div
                key={offer.image}
                className="relative group rounded-lg p-8"
                style={{
                  backgroundImage:
                    hoveredIndex === index ? `url(${offer.image})` : 'none',

                  backgroundColor:
                    hoveredIndex === index ? 'transparent' : 'black',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black opacity-50 rounded-[10px]"></div>
                )}
                <div className="relative py-8 rounded-lg">
                  <span
                    className={`text-7xl ${
                      hoveredIndex === index ? 'text-green' : 'text-orange'
                    }`}
                  >
                    {offer.icon}
                  </span>
                  <p className="text-white font-bold text-xl py-4">
                    {offer.text}
                  </p>
                  <p className="text-[#d3d3d3] leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 
                  </p>
                </div>
                <div className="absolute -bottom-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="bg-green text-white p-2 rounded-full">
                    <IoArrowForward className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Offers
