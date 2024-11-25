import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import secBg1 from './../assets/camp.jpg'
import secBg2 from './../assets/camp2.jpg'

const categories = [
  { text: 'Family Camping', rotationClass : '-rotate-6' },
  { text: 'Wild Camping', rotationClass : 'rotate-6' },
  { text: 'Fishing', rotationClass : '-rotate-6' },
  { text: 'Mountain Biking', rotationClass : 'rotate-6' },
  { text: 'Luxury Cabin', rotationClass : '-rotate-6' },
  { text: 'Couple Camping', rotationClass : 'rotate-6' },
]
const Popular = () => {
  const Section = ({ title, text, children, image, reverse }) => {
    return (
      <div
        className={`max-w-[1320px] mx-auto mt-16 px-3 lg:flex items-center gap-16 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="lg:w-1/2">
          <h6 className="text-green bg-[#ecf5e8] w-fit rounded-md px-5 py-2 font-bold">
            {title}
          </h6>
          <h3 className="lg:text-5xl text-3xl font-bold pb-8 leading-tight flex justify-start">
            {text}
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            blanditiis culpa vel, ut non odit.
          </p>
          {children}
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={image} alt="" className="rounded-t-[300px]" />
        </div>
      </div>
    )
  }

  const Card = ({ text, title }) => {
    return (
      <div
        className={`flex items-center w-fit gap-2 p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-xl ${title}`}
      >
        <IoIosCheckmarkCircle className="text-xl text-orange" />
        <span className="font-bold text-gray-800">{text}</span>
      </div>
    )
  }

  const ProgressBar = ({ value, text }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-28">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: '#63Ab45',
              textColor: '#000',
              trailColor: '#d6d6d6',
              backgroundColor: '#f8f8f8',
            })}
          />
        </div>
        <p className="font-bold mt-2">{text}</p>
      </div>
    )
  }

  return (
    <div>
      <Section
        image={secBg1}
        text="We are funny"
        title="Welcome to Wandersphere"
      >
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col gap-4">
            {categories.slice(0, 3).map((category) => (
              <Card
                key={category.text}
                text={category.text}
                title={category.rotationClass}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {categories.slice(3).map((category) => (
              <Card
                key={category.text}
                text={category.text}
                title={category.rotationClass}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        image={secBg2}
        text="Great opportunity for advanture & travels"
        title="Who We Are"
        reverse
      >
        <div className="bg-gray-100 my-12 p-8 rounded-lg shadow-xl">
          <div className="lg:flex justify-around items-center gap-8 w-full">
            <ProgressBar value={50} text="Satisfied Clients" />
            <ProgressBar value={50} text="Success Rate" />
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Popular
