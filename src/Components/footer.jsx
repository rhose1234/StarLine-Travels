import React from 'react'
import { Link } from 'react-router-dom'

import linkedin from "../assets/utils/linkedin.png"
import twitter from "../assets/utils/Twitter.png"
import instagram from "../assets/utils/instagram.png"
import facebook from "../assets/utils/facebook.png"

export default function Footer() {
  return (
    <>
    <div className='footer py-5'>
    <div className='container'>
        <div className='row mx-auto '>
            <div className='col-12 col-md-3 d-flex flex-column gap-2 justify-content-between mt-3'>
            <h5 className='text-secondary fw-semibold mb-0'>MY ACCOUNT</h5>
            <Link className='text-white' to="/" >Sign In</Link>
            <Link className='text-white' to="/" >Register</Link>
            <Link className='text-white' to="/" >Order Status</Link>
            </div>

              <div className='col-12 col-md-3 d-flex flex-column gap-2 justify-content-between mt-3'>
            <h5 className='text-secondary fw-semibold mb-0'>HELP</h5>
            <Link className='text-white' to="/" >Shipping</Link>
            <Link className='text-white' to="/" >Customer Service</Link>
            <Link className='text-white' to="/" >Booking Status</Link>
            </div>

              <div className='col-12 col-md-3 d-flex flex-column gap-2 justify-content-between mt-3'>
            <h5 className='text-secondary fw-semibold mb-0'>ABOUT</h5>
            <Link className='text-white' to="/" >Our Story</Link>
            <Link className='text-white' to="/" >Media</Link>
            <Link className='text-white' to="/" >Sustainability</Link>
            </div>

              <div className='col-12 col-md-3 d-flex flex-column gap-2  mt-3 justify-content-start '>
            <h5 className='text-secondary fw-semibold mb-0'>FOLLOW US</h5>
            <div className='d-flex flex-row justify-content-start gap-2'>
            <Link to="/" ><img src={linkedin} /></Link>
            <Link to="/" ><img src={facebook} /></Link>
            <Link to="/" ><img src={twitter} /></Link>
            <Link to="/" ><img src={instagram} /></Link>
            </div>
            </div>
        </div>
            <h6 className='fs-6 fw-normal text-center text-secondary mt-5 pt-4'> &copy; 2025 StarLine Travels. All Rights Reserved</h6>

    </div>

    </div>
      
    </>
  )
}
