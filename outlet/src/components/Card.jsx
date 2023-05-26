import React from "react";
import location from "../assets/place-marker.png"

const Card = ({ item }) => {

  const handleViewmore = (id) => {
    window.location.href = `/${id}`;
  };

  return (
    <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        {item.map((Val) => {
          return (
            <div className="col-md-4 col-sm-6 my-3 border-0 card shadow mx-1 rounded card-div" key={Val.id}>
              <div className="card-img-top text-center pt-3">
              <img src={`../bannerimages/${Val.bannerimage}`} alt={Val.title} className="photo w-75" onClick={() => handleViewmore(Val.id)}/>
              </div>
              <div className="card-body">
                <div className="text-capitalize ">
                  <p className="card-title fw-bold fs-4 text-center">{Val.title}</p>
                  <a href={`http://maps.google.com/?q=${Val.location}`} className=" text-decoration-none fs-5">
                    <p><i className="fa-solid fa-location-dot me-2"/>{Val.address}</p> 
                  </a>
                </div>
                {/* <div className="card-text">{Val.desc}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Card;
