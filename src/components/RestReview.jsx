import React from 'react'
import { Collapse } from 'react-bootstrap'
import { useState } from 'react'


function RestReview({selectedrestaurant}) {
    const [open, setOpen] = useState(false);
    console.log(selectedrestaurant);
  return (
    <>
        <button className='btn btn-warning' onClick={() => setOpen(!open)}>Click here to see the reviews</button>
        <Collapse in={open}>
            <div className='my-2'>
                <hr />
                <div className='mt-5'>
                    {selectedrestaurant.reviews.map((review, index) => (
                        <div key={index}>
                            <h6>{review.name} <br /> {review.date}</h6>
                            <p>Rating: {review.rating}</p>
                            <p>Description: {review.comments}</p>
                            <hr />
                        </div>
                        
                    ))}
                </div>
            </div>
        </Collapse>
    </>
  )
}

export default RestReview