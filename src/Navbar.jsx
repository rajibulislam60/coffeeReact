import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="container">
            <div className="navbarArea">
                <div className="logo">
                    <h2>Coffee House</h2>
                </div>
                <ul>
                    <li><a href="#">HOME <i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">SHOP <i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">PRODUCT <i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">PAGES <i className="fa-solid fa-chevron-down"></i></a></li>
                    <li><a href="#">BLOG <i className="fa-solid fa-chevron-down"></i></a></li>
                </ul>
                <div className="searchArea">
                    <input className='search' type="text" placeholder='Enter Your Keyword' /> 
                    <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar