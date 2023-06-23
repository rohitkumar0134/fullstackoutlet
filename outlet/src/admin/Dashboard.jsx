import Admincard from "../components/Admincard"
import React, { useState,useEffect } from "react";
import axios from "axios";
import Buttons from '../components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkToken } from '../hooks/checkToken';

function Dashboard() {
  const [item, setItem] = useState([]);
  const [Data, setData] = useState([]);
  const [menuItems,setmenuItems] = useState([]);
  const [pageviews, setPageviews] = useState(0);
  const [visits, setVisits] = useState(0);
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

  const vistcounter=async()=>{

    await axios.get(`${baseUrl}/pageview/`)
      .then(response => {
        const { data } = response;
        setPageviews(data.pageviews);
        setVisits(data.visits);
      })
      .catch(error => {
        console.error('Error fetching counter data:', error);
      });
  }
  
  useEffect(() => {
    fetchAllData();
    checkToken();
    vistcounter()
  }, []);

  return (
    <>
   <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Admin Dash Board Outlet</h1>
          <div className="col-12 text-end">
        <button className="btn btn-primary" onClick={() => handleAddMore()} >Add More</button>
        <div>
          <br/>
    <span id="pageviews-count"></span>
    <h4>Pageviews {pageviews/2}</h4>
  </div>
  <div>
    <span id="visits-count"></span>
    <h4>Visits {visits}</h4>
  </div>
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