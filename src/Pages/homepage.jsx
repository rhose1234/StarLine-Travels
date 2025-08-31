
import React, { useEffect, useState } from 'react'
import { FaRegCalendarAlt, FaCarAlt } from "react-icons/fa";
import { IoChevronDownOutline,IoTimerOutline } from "react-icons/io5";
import { GiGolfFlag } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
// import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import DestinationCard from '../Components/destinationCard';

import "../Pages/homepage.css"


import BikeTour from "../assets/utils/bikeTour.png";
import AboutImg from "../assets/utils/ladyinlocation.png"
// import sienna from "../assets/utils/sienna.png";
import terrer from "../assets/utils/terreTour.png";
import wine from "../assets/utils/wineTasting.png";
import offers from "../assets/utils/offers.png";

import calendar from "../assets/utils/calendar.png";
import mountainBike from "../assets/utils/mountainBike.png";
import cityApp from "../assets/utils/cityapp.png";
import discount from "../assets/utils/discount.png";
import support from "../assets/utils/support.png";
import guide from "../assets/utils/guide.png";
import water from "../assets/utils/water.png";
import ticket from "../assets/utils/ticket.png";
import bus from "../assets/utils/bus.png";
import companion from "../assets/utils/companion.png";
import driver from "../assets/utils/driver.png";
import location from "../assets/utils/locationIcon.png";
import price from "../assets/utils/price.png";
import FavoriteCard from '../Components/FavoriteCard';


export default function Homepage() {

const [experience, setExperience] = useState(2);
const [customer, setCustomer] = useState(4);
const [service, setService] = useState(1);
const [guides, setGuides] = useState(1);

useEffect(()=> {
  if(guides < 10){
    const countguides = setInterval(() => {
      setGuides((guides) => {
        if(guides + 2 >= 10 ){
          clearInterval(countguides)
          return 10
        }
        return guides + 2 ;
         })
      }, 100);
    return () => clearInterval(guides)
  }
}, [guides])



useEffect(() => {
    if(service < 15){
      const countservice = setInterval(() => {
        setService((service) => {
        if(service + 2 >= 15){
          clearInterval(countservice)
          return 15;
        }
       return service +  2;
        })
      }, 100);
      return () => clearInterval(countservice)
    }
}, [service])

useEffect(() => {
  if(customer < 100) {
    const countup = setInterval(() => {
      setCustomer((customer) => {
        if(customer + 5 >= 100){
          clearInterval(countup);
          return 100;
        }
        return customer + 5;
      })
    }, 100);
    return () => clearInterval(countup)
    
  }
}, [customer])


useEffect(() => {
  if (experience < 20) {
    const interval = setInterval(() => {
      setExperience((exp) => {
        if (exp + 4 >= 20) {
          clearInterval(interval);
          return 20; 
        }
        return exp + 4;
      });
    }, 100);

    return () => clearInterval(interval);
  }
}, [experience]);


 

    const destinations = [
    {
      image: BikeTour,
      title: "Lucca Bike Tour",
      price : "34 €",
      description: "A tour of the city and its surroundings led by a professional guide ...."
    },
    {
      image: wine,
      title: "Wine in Tuscany",
       price : "45 €",
      description: "The real magic is here where you can enjoy the best Tuscan wine and eat ..."
    },
    {
      image: terrer,
      title: "Cinque Terre Tour",
      price : "44 €",
      description: "Visiting the 5 Terre is a must, and you can never go there enough ..."
    },
    {
      image: terrer,
      title: "Siena Surroundings",
       price : "25 €",
      description: "Visit the beautiful Siena and the cities that surround it to experience ..."
    },
    {
      image: terrer,
      title: "Siena Surroundings",
       price : "30 €",
      description: "Visit the beautiful Siena and the cities that surround it to experience ..."
    },
  {
      image: terrer,
      title: "Siena Surroundings",
       price : "15 €",
      description: "Visit the beautiful Siena and the cities that surround it to experience ..."
    },
  ];

  const favorites = [
    {
      image: BikeTour,
      title: "BIKE/RICKSHAW ",
      price : "10 €",
      feature1 : "Your bike for a day",
      icon1 : calendar,
      feature2 : "City App",
      icon2: cityApp,
      feature3 : "Discount on Rickshaw",
      icon3 : discount,
      feature4: "Guaranteed Support",
      icon4: support
    },
     {
      image: BikeTour,
      title: "BIKE TOURS ",
      price : "30 €",
      feature1 : "Mountain Bike Included",
      icon1 : mountainBike,
      feature2 : "A Guide For You",
      icon2: guide,
      feature3 : "Bottle of water",
      icon3 : water,
      feature4: "Guaranteed Support",
      icon4: support
    },
       {
      image: BikeTour,
      title: "BUS TRIPS",
      price : "45 €",
      feature1 : "Park ticket",
      icon1 : ticket,
      feature2 : "Return bus",
      icon2: bus,
      feature3 : "Companion",
      icon3 : companion,
      feature4: "Guaranteed Support",
      icon4: support
    },
         {
      image: BikeTour,
      title: "TRANSFER",
      price : "25 €",
      feature1 : "Personal Driver",
      icon1 : driver,
      feature2 : "Wherever You Want",
      icon2: location,
      feature3 : "At the best price",
      icon3 : price,
      feature4: "Guaranteed Support",
      icon4: support
    },
  ]

  return (
    <>
      <div className='heroSection container-fluid h-100vh pt-5 d-flex justify-content-start align-items-center flex-column position-relative'>
  <div className='borderCircle d-flex justify-content-center align-items-center flex-row px-4 py-1 rounded-5 gap-2'>
  <div className='dotCircle rounded-5 mt-1'></div>
  <p className='text-white fw-semibold fs-6 mb-0'>One Journey at a time</p>
</div>
<div className='heroContent text-center col-12'>
  <h1 className='fs-1 text-white fw-bolder mt-2 lh-base lh-md-sm'>
    Explore the World With <span>Ease</span>  </h1>
    <p className=' text-white'>At StarLine Travels, we believe travel should be seamless, 
inspiring, and unforgettable. Whether you’re chasing sunsets 
on tropical beaches,exploring ancient cities, or planning.
</p>
  </div>

  <div className='heroBox col-12 col-md-12 col-sm-10 px-3'>
    <form>
<div className='box row  col-12 bg-white align-items-center gap-2 gap-md-1 g-1 col-12 py-4 py-md-3 px-md-4 px-4 rounded-4'>
<div className="col-12 col-md-3 md-border-end border-0 ">
  <label className="d-flex flex-row justify-content-start align-items-center gap-1 text-white mb-2">
    <FaRegCalendarAlt />
    <span>Date</span>
  </label>
  
  <div className="position-relative">
    <input type="date" className="form-control text-white bg-white"
      style={{colorScheme: "dark" }} />

    {/* Fake placeholder */}
    <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted text-secondary"
      style={{ pointerEvents: "none" }}> Choose Date </span>

    {/* Dropdown icon */}
    <span className="position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary" style={{ pointerEvents: "none" }}>
      <IoChevronDownOutline/>
    </span>
  </div>
</div>



<div className="col-12 col-md-2 md-border-end border-0">
  <label className="d-flex flex-row justify-content-start align-items-center gap-1 text-white mb-2">
    <IoTimerOutline />
    <span>Time</span>
  </label>
  
  <div className="position-relative">
    <input type="time" className="form-control text-white bg-white"
      style={{colorScheme: "dark" }} />

    {/* Fake placeholder */}
    <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted text-secondary"
      style={{ pointerEvents: "none" }}> Choose Time </span>

    {/* Dropdown icon */}
    <span className="position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary" style={{ pointerEvents: "none" }}>
      <IoChevronDownOutline/>
    </span>
  </div>
</div>



<div className="col-12 col-md-3 border-md-end border-0">
  <label className="d-flex flex-row justify-content-start align-items-center gap-1 text-white mb-2">
    <GiGolfFlag />
    <span>Tour</span>
  </label>

  <div className="position-relative">
    <select className="form-control bg-white text-dark">
      <option value="" disabled selected>
        Select Tour
      </option>
      <option value="paris">Paris, France</option>
      <option value="rome">Rome, Italy</option>
      <option value="tokyo">Tokyo, Japan</option>
      <option value="newyork">New York, USA</option>
      <option value="capeTown">Cape Town, South Africa</option>
    </select>

    {/* Dropdown icon*/}
    <span
      className="position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary"
      style={{ pointerEvents: "none" }}
    >
      <IoChevronDownOutline />
    </span>
  </div>
</div>




<div className="col-12 col-md-3 border-md-end border-0 ">
  <label className="d-flex flex-row justify-content-start align-items-center gap-1 text-white mb-2">
    <FaCarAlt />
    <span>Transportation</span>
  </label>

  <div className="position-relative">
    <select className="form-control bg-white text-dark">
      <option value="" disabled selected>
        Select Transportation
      </option>
      <option value="car">Car</option>
      <option value="bus">Bus</option>
      <option value="train">Train</option>
      <option value="flight">Flight</option>
      <option value="ship">Ship / Cruise</option>
      <option value="bike">Bike</option>
    </select>

    {/* Dropdown icon (for styling consistency) */}
    <span
      className="position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary"
      style={{ pointerEvents: "none" }}
    >
      <IoChevronDownOutline />
    </span>
  </div>
</div>


<button className='col-12 col-md-auto btn bg-primary searchBtn shadow-sm ' type='submit'><CiSearch  className='text-white fs-4'/></button>

</div>



    </form>
</div>
</div>


<div className='destinationSection'>
  <div className="container">
  <div className='heading d-flex py-5'>
  <h3 className='fw-bold fs-2'>Explore Our Popular Destinations </h3>
  {/* <div className='d-flex justify-content-between align-items-center flex-row gap-3'>
  <div className='previous rounded-5 d-flex align-items-center justify-content-center text-center'><IoChevronBackSharp /></div>
  <div className='backward rounded-5 d-flex align-items-center justify-content-center text-center'><IoChevronForwardSharp /></div>
  </div> */}
  </div>
          <div className="row g-4">
            {destinations.map((dest, index) => (
              <div className="col-md-3 col-12 d-flex justify-content-center" key={index}>
                <DestinationCard
                  image={dest.image}
                  title={dest.title}
                  description={dest.description}
                  price = {dest.price}
                />
              </div>
            ))}
          </div>
    
  </div>


  
</div>

<div className='aboutIntro py-5  '>
  <div className='container  '>
    <div className='row mx-auto d-flex justify-content-between align-items-center g-0'>
      
      {/* Left Image */}
      <div className='col-12 col-md-6'>
        <img src={AboutImg} className='img-fluid' alt="About Us"/>
      </div>

      {/* Right Content */}
      <div className='col-12 col-md-6'>
        <p className='fw-semibold fs-6 mb-1'>WELCOME TO OUR SITE!</p>
        <h3 className='text-black fw-bold'>We are the best company for your visit</h3>
        <p className='text-secondary text-start fw-6 mt-1 lh-base'>
          After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!...
        </p>

        {/* Stats Section */}
        <div className='statistics d-flex flex-nowrap justify-content-between col-12 col-md-9 mt-4'>

          <div className='stats d-flex flex-column text-center text-md-start mb-3'>
            <h1 className='fw-semibold'>{experience}+</h1>
            <p className='text-secondary'>Years Experience</p>
          </div>

          <div className='stats d-flex flex-column text-center text-md-start mb-3'>
            <h1 className='fw-semibold'>{customer}+</h1>
            <p className='text-secondary'>Happy Customer</p>
          </div>

          <div className='stats d-flex flex-column text-center text-md-start mb-3'>
            <h1 className='fw-semibold'>{service}+</h1>
            <p className='text-secondary'>Choice of Service</p>
          </div>

          <div className='stats d-flex flex-column text-center text-md-start mb-3'>
            <h1 className='fw-semibold'>{guides}+</h1>
            <p className='text-secondary'>Professional Guides</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>


<div className='offers  '>
<div className='container'>
  <div className='row d-flex flex-col justify-content-center align-items-center'>
    <div className='col-12 col-md-6 pt-5  py-5 py-md-0'>
      <div className='boxCard p-5  rounded-5 d-block text-center' >
      <h3 className='fw-bold'>Get Special Offers for Organizations</h3>
      <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button className='fw-semibold rounded-5 px-4 py-2 mt-2 border-0 text-white'>Contact Us</button>
      </div>
    </div>
     <div className='col-12 col-md-6 d-none d-md-flex'>
      <img src={offers} className='w-75' />
     </div>
  </div>
</div>
</div>

<div className='favorites py-5'>
  <div className="container ">
  <div className='heading d-flex'>
  <h3 className='fw-bold fs-2'>Our Customer Favorites</h3>
  {/* <div className='d-flex justify-content-between align-items-center flex-row gap-3'>
  <div className='previous rounded-5 d-flex align-items-center justify-content-center text-center'><IoChevronBackSharp /></div>
  <div className='backward rounded-5 d-flex align-items-center justify-content-center text-center'><IoChevronForwardSharp /></div>
  </div> */}
  </div>

  
          <div className="row mx-auto g-4 pt-5">
            {favorites.map((fav, index) => (
              <div className="col-md-3 col-12 d-flex justify-content-center" key={index}>
           <FavoriteCard
                  image={fav.image}
                  title={fav.title}
                  description={fav.description}
                  price = {fav.price}
                  feature1 = {fav.feature1}
                  icon1 = {fav.icon1}
                  feature2 = {fav.feature2}
                  icon2 ={fav.icon2}
                  feature3 ={fav.feature3}
                  icon3 = {fav.icon3}
                  feature4 = {fav.feature4}
                  icon4 = {fav.icon4}
                />
              </div>
            ))}
          </div>
    
  </div>


  
</div>

<div className="subscribe py-5">
  <div className="container">
    <div className="row mx-auto d-flex justify-content-center align-items-center mt-5">
      <div className="col-12 col-md-6">
        <h1 className="text-white fw-bold fs-2 lh-base">
          Subscribe To Our Newsletter
        </h1>
      </div>

      <div className="col-12 col-md-6">
        <form className="position-relative w-100">
          <input
            type="email"
            className="form-control rounded-5 px-4 py-3 pe-1 focus-ring-none outline-none"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="fw-semibold position-absolute top-50 end-0 translate-middle-y me-0 px-5 py-3 rounded-5 border-0 text-white"
            style={{ background: "#00173A" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>



    </>
  )
}
