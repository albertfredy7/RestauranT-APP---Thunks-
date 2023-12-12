import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {id} = useParams()
    console.log(id);

    const allRestaurant = useSelector((state)=>state.restuarantSlice.allRestuarants.restaurants)
    console.log(allRestaurant);
    const selectedrestaurant = allRestaurant.find(item=>item.id == id)
    console.log(selectedrestaurant);

  return (
    <Row className='my-5'>
        <Col md={1}></Col>
        <Col md={3}>
            <img width={'100%'} height={'100%'} className='rounded' src={selectedrestaurant.photograph} alt="" />
        </Col>
        <Col md={7} className='p-4'>
            <hr />
            <h3 className='text-center'><span className='text-warning'>Restaurant</span> Details</h3>
            <hr />
            <ListGroup variant="flush">
                <ListGroup.Item><span className='fw-bold'><h4 className='text-center p-3'>{selectedrestaurant.name}</h4></span></ListGroup.Item>
                <ListGroup.Item><p>Neighbourhood: {selectedrestaurant.neighborhood}</p></ListGroup.Item>
                <ListGroup.Item><p>Cuisine: {selectedrestaurant.cuisine_type}</p></ListGroup.Item>
                <ListGroup.Item><p>Address: {selectedrestaurant.address}</p></ListGroup.Item>
                <ListGroup.Item className='text-center p-3 mb-3'>
                    
                
                <button onClick={handleShow} className='btn btn-warning me-3'>Operating Hours</button>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item>Monday : {selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
                                <ListGroup.Item>Tuesday : {selectedrestaurant.operating_hours.Tuesday}</ListGroup.Item>
                                <ListGroup.Item>Wednesday : {selectedrestaurant.operating_hours.Wednesday}</ListGroup.Item>
                                <ListGroup.Item>Thursday : {selectedrestaurant.operating_hours.Thursday}</ListGroup.Item>
                                <ListGroup.Item>Friday : {selectedrestaurant.operating_hours.Friday}</ListGroup.Item>
                                <ListGroup.Item>Saturday : {selectedrestaurant.operating_hours.Saturday}</ListGroup.Item>
                                <ListGroup.Item>Sunday : {selectedrestaurant.operating_hours.Sunday}</ListGroup.Item>
                            </ListGroup>
                            </Modal.Body>
                        </Modal>
                        <RestReview selectedrestaurant={selectedrestaurant} />
                
                </ListGroup.Item>
            </ListGroup>
            <hr />
        </Col>
        <Col md={7}></Col>

    </Row>
  )
}

export default RestView