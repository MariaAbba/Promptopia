import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { IoMdMenu } from 'react-icons/io'
import logo from './../assets/logo.png'

const Header = () => {
  const [dropdown, setDropdown] = useState(false)

  const showDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <nav>
      <div>
        <div>
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <ul>
            <a href="#home">Home</a>
            <a href="#tours">Tours</a>
            <a href="#destinations">Destinations</a>
            <a href="#news">News</a>
            <a href="#page">Pages</a>
            <a href="#contact">Contacts</a>
          </ul>
          <div>
            <button>
              <CiSearch size={32} />
            </button>
            <button>
              <IoPersonCircleOutline size={24} />
            </button>
          </div>
          {dropdown ? (
            <div>
              <IoClose />
            </div>
          ) : (
            <div>
              <IoMdMenu />
            </div>
          )}
        </div>
        {dropdown && (
          <ul>
            <a href="#home">Home</a>
            <a href="#tours">Tours</a>
            <a href="#destinations">Destinations</a>
            <a href="#news">News</a>
            <a href="#page">Pages</a>
            <a href="#contact">Contacts</a>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Header
