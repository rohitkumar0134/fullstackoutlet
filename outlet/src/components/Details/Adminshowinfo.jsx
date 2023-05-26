import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { VideoPlayerModal } from '../VideoPlayerModal';
import axios from 'axios';
import AddImagesModal from '../AddImagesModal';


export default function ShowInfo() {
  const [modalShow, setModalShow] = useState(false);
  const [imageshowModal, setimageShowModal] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_API_URL;
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [imageData, setImageData] = useState([]);


  
  const fetchAllData = async () => {
     
    const response = await axios.get(`${baseUrl}/outlets/${id}`);
    setData(response.data)
    console.log(response.data)

    const imageres = await axios.get(`${baseUrl}/outlet/images/${id}`);
    setImageData(imageres.data)
    console.log(imageres.data)
    
  };



  useEffect(() => {

    fetchAllData();
  }, []);

  const openimageModal = () => {
    setimageShowModal(true);
  };

  const handleDelete = async(id) => {
    console.log("Delete ID:", id);
    

    try {
      const formData = new FormData();
      formData.append('id', id);
      const token = localStorage.getItem('token');
      console.log(token)
      formData.append('token', token);

      await axios.post(`${baseUrl}/outlet/delete/images`, formData);


    } catch (error) {
      console.error(error);
    }

    
  };

  return (
    <>
    <Container>
    <div className="wrapper my-4">

  <div className="showinfo-div">
  <img  style={{width:350,height:500,objectFit:'cover', borderRadius:'5px'}} src={`../../bannerimages/${Data.bannerimage}`} alt='movie thumnail'/>
  <div className="mt-4">
    <h3 className='fw-bold'>{Data.title}</h3>
    <p className='mt-3'>{Data.description}</p>
    <p className='mt-3'>Open Time : {Data.opentiming} Close Time : {Data.closetiming}</p>
    <p className='mt-3' >Address : 
    <a href={`http://maps.google.com/?q=${Data.location}`} className=" text-decoration-none fs-5"> {Data.address}</a></p>
    <button onClick={() => setModalShow(true)} className='btn fw-bold border border-dark mt-3 shadow'>
      Play video</button>
  </div>
</div>

<div className="mt-4">
  <h2>Image</h2>

  <div className="col-12 text-end">
        <button className="btn btn-primary" onClick={openimageModal} >Add More</button>
      </div>
      <div className='d-flex flex-wrap justify-content-around'>
{imageData.map((imageUrl, index) => (


    <div key={index} className='mt-4'>
    <LazyLoadImage 
    width={200}
    height={200}
    style={{
      objectFit:'cover',
      borderRadius:'100%'

    }}
    src={`../../bannerimages/${imageUrl.images}`} alt='user'/>

<div className="d-flex justify-content-center">
              <button className="btn btn-danger" onClick={() => handleDelete(imageUrl.id)}>Delete</button>
            </div>

  </div>







    ))}
  </div>
</div>
      </div>
    </Container>
    <VideoPlayerModal
    videoid={Data.youtubeLink}
    title={Data.title}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <AddImagesModal id={id} show={imageshowModal}  title={Data.title} handleClose={() => setimageShowModal(false)} />
    </>
  )
}
