import React from "react";

export default function FavoriteCard({ image, title, price, icon1, feature1, icon2, feature2, icon3, feature3, icon4, feature4}) {
  return (
    <div className="bg-white card shadow-sm border-0 outline-0  rounded-4 w-100" >
      <img src={image} className="img-fluid" alt={title} />
      <div className="px-4 pb-4">
        <h5 className=" fw-bold fs-5 mt-4">{title}</h5>
        <div className="d-flex justify-content-start gap-2 price align-items-center">
<h4 className="fs-2 fw-bold" style={{ color: "#0095F0" }}>{price}</h4>
         <p className="fs-6 fw-medium mt-1 text-secondary">/day</p> 
        </div>
    
  
<div className="features d-flex flex-column gap-4 mt-3">
  <div className="d-flex justify-content-start align-items-center gap-2">
  <img src={icon1} alt="" style={{ width: "20px", height: "20px" }} />
  <p className="m-0 fs-6">{feature1}</p>
</div>


    <div className="d-flex justify-content-start align-items-center gap-2">
         <img src={icon2} alt="" style={{ width: "20px", height: "20px" }} />
        <p className="m-0 fs-6">{feature2}</p>
    </div>

    <div className="d-flex justify-content-start align-items-center gap-2">
         <img src={icon3} alt="" style={{ width: "20px", height: "20px" }} />
        <p className="m-0 fs-6">{feature3}</p>
    </div>

<div className="d-flex justify-content-start align-items-center gap-2">
        <img src={icon4} alt="" style={{ width: "20px", height: "20px" }} />
        <p className="m-0 fs-6">{feature4}</p>
    </div>
</div>
     
<button className="fw-semibold fs-5 py-2 w-100 mt-4 rounded-5 book-btn">
  Book Now
</button>
       </div>
    </div>
  );
}

