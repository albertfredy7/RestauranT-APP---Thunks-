import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarant } from '../redux/restuarantSlice'


function Home() {

  const allRestaurant= useSelector((state)=>state.restuarantSlice.allRestuarants.restaurants)
  console.log(allRestaurant);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRestuarant())
  }, [])

  return (
    <Row className='mt-3'>
        {
          allRestaurant?.length>0?
          allRestaurant?.map((item)=>(
            <Col className='px-5 py-3' sm={6} md={3}>
              <RestCard item={item}/>
            </Col>
          )) 
          :
          <p>No Restuarants</p>
        }
        
    </Row>
  )
}

export default Home