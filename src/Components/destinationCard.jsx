import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";


export default function DestinationCard({ image, title, description, price }) {
  return (
    <div className="bg-white card shadow-sm border-0 outline-0  rounded-4 w-100" >
      <img src={image} className="img-fluid" alt={title} />
      <div className="px-4">
        <h5 className=" fw-bold fs-5 mt-4">{title}</h5>
        <div className="d-flex justify-content-start gap-3 price align-items-center">
        <p className="fs-6 fw-medium mt-1 text-black">from</p> 
        <h4 className="fs-5 fw-bold">{price}</h4>
        </div>
      </div>

      
      <div className=" decision d-flex px-3  justify-content-between align-items-center gap-1">
        <div className="d-flex justify-content-between  align-items-center gap-2">
        <FaRegCalendarAlt />
        <p className="fs-6 mt-3">TO BE DECIDED</p>
        </div>

        <div  className="d-flex justify-content-start align-items-center gap-2">
        <HiMiniUserGroup/> 
        <p className="fs-6 mt-3">10-50 PP</p>
        </div>

      </div>
        <p className=" px-3 fs-6 fw-normal text-black">{description}</p>
    </div>
  );
}


