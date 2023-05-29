import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import ReactPlayer from 'react-player/youtube'

export const VideoPlayerModal = (props) => {
  return (
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
    >
      <Modal.Header closeButton style={{background:"#F4EEE0", border:'2px solid #393646'}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background:'#F4EEE0', border:'2px solid #393646', borderTop:'none'}} >
      <ReactPlayer
      
      width={'100%'}
      playing controls url={`${props?.videoid}`} />
      </Modal.Body>
      <Modal.Footer style={{background:"#F4EEE0",border:'2px solid #393646' , borderTop:'none'}}>
        <Button onClick={props.onHide} style={{background:'#393646', border:'none'}} >Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
