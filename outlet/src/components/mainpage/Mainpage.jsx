import React, { useState,useEffect } from "react";
import Buttons from '../../components/Buttons'
import Card from '../../components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function Mainpage() {
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
          <h1 className="col-12 text-center my-3 fw-bold">Outlet</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>

  )
}

export default Mainpage;
