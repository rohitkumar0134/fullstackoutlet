import Admincard from "../components/Admincard"
import React, { useState,useEffect } from "react";
import axios from "axios";
import Buttons from '../components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [item, setItem] = useState([]);
  const [Data, setData] = useState([]);

  const [menuItems,setmenuItems] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_API_URL;



  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem); 
  };

  const handleAddMore = () => {
    window.location.href = '/admin/addoutlet';
  };


  const fetchAllData = async () => {
    const response = await axios.get(`${baseUrl}/outlets`);
    setItem(response.data);
    setData(response.data);
    setmenuItems([... new Set(response.data.map((item)=> item.category))])
    console.log(response.data)
  };

  
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
   <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Admin Dash Board Outlet</h1>
          <div className="col-12 text-end">
        <button className="btn btn-primary" onClick={() => handleAddMore()} >Add More</button>
      </div>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
      <Admincard item={item}/>
      
      
      </div>
      </div>
    </>
      
  )
}

export default Dashboard