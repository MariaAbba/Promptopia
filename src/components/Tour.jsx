import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import img from './../assets/img1.jpg'
import { BsPlay } from 'react-icons/bs'
import Accordion from '../components/Accordion'
import { IoVideocamOutline } from 'react-icons/io5'
import {
  MdArrowRightAlt,
  MdLocationPin,
  MdPeopleOutline,
  MdStar,
} from 'react-icons/md'
import { LiaDollarSignSolid } from 'react-icons/lia'
import { CiCamera, CiHeart } from 'react-icons/ci'
import { WiTime3 } from 'react-icons/wi'
import tour1 from './../assets/tour-08.jpg'
import tour2 from './../assets/tour-07.jpg'
import tour3 from './../assets/tour-06.jpg'
import tour4 from './../assets/tour-04.jpg'
import tour5 from './../assets/tour-05.jpg'

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

const Tours = ({ image, name }) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-t-lg">
        <img src={image} alt="" className="rounded-t-lg hoverImg" />
        <div className="absolute flex justify-between top-4 right-4 left-4">
          <p className="bg-[#14B0C3] rounded-md px-4 py-1 text-white text-sm">
            FEATURED
          </p>
          <button className="bg-[#00000066] pl-1 rounded-md">
            <CiHeart className="text-white text-xl" />
          </button>
        </div>
      </div>
      <div className="border border-[#ebe6de] rounded-b-lg relative">
        <div className="absolute -top-5 w-full h-5 bg-white rounded-t-[20px]"></div>
        <div className="px-6">
          <div className="flex justify-between items-center gap-4 relative">
            <span className="flex justify-center">
              {[...Array(5)].map((_, index) => (
                <MdStar key={index} className="text-[#ffa801] text-xl" />
              ))}
            </span>
            <span className='flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg'>
              <div className="relative">
                <CiCamera size={24} />
                <button className="bg-green text-xs rounded-full text-white w-4 h-4 flex justify-center items-center absolute top-0 right-0">
                  5
                </button>
              </div>
              <IoVideocamOutline size={24} />
            </span>
          </div>
          <h4 className="text-xl font-semibold py-2">{name}</h4>
          <span className="flex items-center gap-2">
            <MdLocationPin className="text-green text-xl" />
            <p className="text-[#755583] text-sm">Main Street, Brooklyn, NY</p>
          </span>
          <span className=" text-[#755583] flex py-4">
            <LiaDollarSignSolid className="text-green text-xl" /> From
            <p className="text-green">$59.00</p>
          </span>
          <div className="flex justify-between border-t py-2">
            <div
              className="flex gap-4 items-center
            "
            >
              <span className="flex items-center gap-1">
                <WiTime3 className="text-green" /> 10 days
              </span>
              <span className="flex items-center gap-1">
                <MdPeopleOutline className="text-green" /> 50 people
              </span>
            </div>
            <a href="#" className='flex items-center gap-2 text-sm mt-2'>
              Explore <MdArrowRightAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tour = () => {
  return (
    <div>
      <section>
        <div className="max-w-[1320px] mx-auto lg:-mt-20 mb-10 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg">
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

          <div className="w-full lg:w-1/2 py-24 lg:px-12 px-3">
            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
              <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
              <h6 className="text-green relative font-semibold">
                Availability
              </h6>
            </div>
            <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">
              Enjoy real adventure
            </h3>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12" data-aos="fade-down">
        <div className="relative w-fit px-8 py-2 flex items-center justify-center">
          <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
          <h6 className="text-green relative font-semibold">Featured Tours</h6>
        </div>
        <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">
          Amazing tour places around the world
        </h3>
        <div>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={true}
            itemClass="pb-4 px-2"
          >
            <Tours image={tour1} name='Discovery Island Kayak Tour' />
            <Tours image={tour2} name='Boathouse Neighborhood' />
            <Tours image={tour3} name='Wonderful Floating Villa' />
            <Tours image={tour5} name='Yucatan Peninsula & Caribbean' />
            <Tours image={tour4} name='Java & Bali One Life Adventure' />
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default Tour
