import React from 'react'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from 'react-icons/io5'

const items = [
  {
    title: 'How much Price About Tour & Travels',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    title: "We're providing the best services",
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    title: 'Best Experience Travel Agency',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
]

const Accordion = () => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <DisclosureButton
                className={`w-full text-left bg-white rounded-sm p-4 flex items-center justify-between ${
                  open ? 'border-l-2 border-green' : 'border mb-4'
                }`}
              >
                <span className="font-bold text-lg">{item.title}</span>
                <span>
                  {open ? (
                    <IoChevronUpCircleOutline className="w-5 h-5 text-green" />
                  ) : (
                    <IoChevronDownCircleOutline className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </DisclosureButton>
              <DisclosurePanel className=" bg-white p-4 border-l-2 border-green rounded-sm mb-2 ">
                <p className="text-gray-600"> {item.content}</p>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
export default Accordion
