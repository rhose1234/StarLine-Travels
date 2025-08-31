import React, { useEffect, useState } from 'react'
import Logo from './logo'
import {NavLink} from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";


export default function Navbar() {

  const [scroll, setScroll] = useState(false)

useEffect(() => {

  const handleScroll = () => {
  if(window.scrollY > 50){
    setScroll(true)
  }
  else{
    setScroll(false)
  }
   }
window.addEventListener("scroll", handleScroll)

}, [])


  return (
    <>
      <nav className={`navbar navbar-expand-lg  position-fixed py-3 w-100 z-3 ${ scroll ? "scroll" : "bg-transparent" } `}>
  <div className="container justify-content-between mx-auto align-items-center">
    <a className="navbar-brand" href="#">
      <Logo />
    </a>
<button 
  className="navbar-toggler" 
  type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" 
  aria-label="Toggle navigation"
>
  <span className="toggler-line"></span>
  <span className="toggler-line"></span>
  <span className="toggler-line"></span>
</button>


    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-5 mb-2 mb-lg-0 gap-3 mx-auto fw-medium fs-6 align-items-center justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/packages">Packages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-5" to="/cart">
            <IoCartOutline />
          </NavLink>
        </li>
      </ul>

      <div className="d-flex flex-column flex-lg-row align-items-center gap-3 ms-md-auto ms-0 mt-3 mt-lg-0">
        <NavLink className="nav-link text-white fw-semibold fs-6" to="/login">
          Log in
        </NavLink>
        <button className="signUp btn-sm shadow-sm text-white py-2 px-4 rounded-5 border-0 fw-semibold fs-6" style={{ backgroundColor: "#47ACFF" }}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

