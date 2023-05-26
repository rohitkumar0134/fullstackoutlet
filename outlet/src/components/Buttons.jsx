import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


const Buttons = ({ filterItem, setItem, menuItems }) => {
  const [selected, setSelected] = useState("All");
  const [Data, setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const fetchAllData = async () => {
    const response = await axios.get(`${baseUrl}/outlets`);
    setData(response.data);
    console.log(response.data)
  };

  
  useEffect(() => {
    fetchAllData();
  }, []);


  function handleClick(Data){
    setItem(Data);
    setSelected("All")
  }
  function handleClick2(Val){
    filterItem(Val);
    setSelected(Val)
  }

  return (
    <>
      <div className="d-flex justify-content-around mx-auto w-75 flex-wrap sort-div">
      <button
          className="my-2 px-3 fw-bold btn mx-1 sort-btn"
          onClick={() => handleClick(Data)}
          id={selected == "All" ? "selected" : ""}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          
          return (
            <button
              className="my-2 px-3 btn fw-bold text-capitalize mx-1 sort-btn"
              onClick={() => handleClick2(Val)}
              id={selected == Val ? "selected" : ""}
              key={id}
            >
              {Val}
            </button>
          );
        })}

      </div>
    </>
  );
};

export default Buttons;
