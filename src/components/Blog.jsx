import React from 'react'
import { FaComment, FaUser } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
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

const Blog = () => {
  const Blogs = ({ title, text, image }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-xl p-4">
        {image && (
          <div className="relative h-64 mb-12">
            <div className="overflow-hidden rounded-lg relative h-full ">
              <img
                src={image}
                alt=""
                className="w-full h-full rounded-lg absolute hoverImg"
              />
            </div>
            <div className="bg-orange text-white px-8 py-1 w-fit absolute -bottom-4 left-4 z-10 -rotate-[10deg]">
              {title}
            </div>
          </div>
        )}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span className="mr-2 flex items-center gap-2">
            <FaUser className="text-green" /> Admin
          </span>
          <span className="flex items-center gap-2">
            <FaComment className="text-green" /> 0 Comments
          </span>
        </div>
        <div className="font-bold text-2xl mb-2 hover:text-green">{text}</div>
      </div>
    )
  }
  return (
    <div>
      <section
        className="max-w-[1320px] mx-auto py-24 px-3
      "
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
              <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
              <h6 className="text-green relative font-semibold">
                Recent news feed
              </h6>
            </div>
            <h3 className="lg:text-5xl text-3xl font-bold pb-8 lg:w-2/3 py-4">
              Latest news & articles from the blog
            </h3>
          </div>
            <button className="bg-green text-white rounded-lg text-lg shadow  font-bold px-8 py-4 ">
              View More
            </button>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <Blogs
            text="Things to see and do when visiting Japan"
            title="Adventure"
            image="/blog-1.jpg"
          />
          <Blogs
            text="Things to see and do when visiting Japan"
            title="Adventure"
            image="/blog-1.jpg"
          />
          <div className="flex flex-col gap-2">
            <Blogs text="Things to see and do when visiting Japan" />
            <Blogs text="Things to see and do when visiting Japan" />
            <Blogs text="Things to see and do when visiting Japan" />
          </div>
        </div>
      </section>

      <div>
        <Carousel
          responsive={responsive}
          infinite
          autoplay={true}
          itemClass="4"
        >
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-1.jpg" alt="" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-1.jpg" alt="" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-1.jpg" alt="" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-1.jpg" alt="" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-1.jpg" alt="" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-1.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Blog
