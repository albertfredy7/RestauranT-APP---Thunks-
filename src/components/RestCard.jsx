import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({item}) {
  return (
    <div style={{overflowX:'hidden'}}>
        <Link style={{textDecoration:'none'}} to={`/restuarant-view/${item.id}`}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.photograph} height={'75%'}  />
                <Card.Body>
                    
                    <Card.Title className='text-center' style={{color:'#f6db76'}}>{item.name}</Card.Title>
                    <hr />
                    <Card.Text>
                        <Row className='p-4'>
                            <Col className='ms-4'>
                                <div>{item.neighborhood}</div>
                            </Col>
                            <Col className='ms-4'>
                                <div>{item.cuisine_type}</div>
                            </Col>
                        </Row>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Link>
    </div>
  )
}

export default RestCard