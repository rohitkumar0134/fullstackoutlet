import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Resizer from "../hooks/Resizer"
import axios from 'axios';

function AddImagesModal({ show, handleClose,id,title }) {
  const [image, setImage] = useState(null);
  const baseUrl = import.meta.env.VITE_BASE_API_URL;
    
      const handleFileChange =(event) => {
        const file = event.target.files[0];
        if (file) {
          const extension = file.type.split('/').pop().toUpperCase();
          Resizer.imageFileResizer(
            file, // the file to be resized
            1200, // the maximum width in pixels
            1600, // the maximum height in pixels
            extension, // the output format
            80, // the quality of the output image, from 0 to 100
            0, // the degree of rotation to apply to the image
            (uri) => {
              setImage(uri);
            },
            'file', // the output type, either 'base64', 'blob' or 'file'
            400 // the maximum size in kilobytes of the output file
    
          );
        }
        
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        // Perform form submission logic here
        if (image) {
          const formData = new FormData();
          formData.append('outletid', id);
          formData.append('title', title);
          const token = localStorage.getItem('token');
          formData.append('token', token);
          formData.append('bannerimage', image);
          
    
    
          try {
            await axios.post(`${baseUrl}/outlet/upload/images`, formData);
          } catch (error) {
            console.error(error);
          }
        }

        handleClose();
      };
    

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add More in id : {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">Choose file</label>
          <input type="file" className="form-control text-danger" id="fileInput" onChange={handleFileChange} />
        </div>
          {/* Add more form fields here */}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );

}

export default AddImagesModal