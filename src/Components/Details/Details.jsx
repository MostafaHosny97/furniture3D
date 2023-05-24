import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chat from '../Chat/Chat'

export default function Details() {




  return <section id='details' className='py-4' >

    <Chat/>

    <div className="container py-5">
      <div className="row text-center m-auto py-5 my-5 g-5">

        <div className="col-md-4 my-3 col-10 m-auto ">
            <Link to={'/firstpicture'}>
            <div className="item bg-main rounded-5  "  >
            <img src={require('../../images/office.jpg')} className='w-100 rounded-5'  alt="" />
            <h2 className='text-white py-3 fw-bolder h6'>Wooden Table</h2>
            <div className='d-flex justify-content-around align-items-center'>
                  <h6 className='px-3 text-muted py-1'> <span className=' text-white fw-bolder'>$198.00</span></h6>
                  <span className='d-flex justify-content-around px-3'>
                  <i className='fas fa-star text-warning px-1 fs-5'></i>
                  <h6 className='text-white'>4.7</h6>
                </span>
            </div>
            <button className='btn btn-outline-light w-50 mb-2 rounded-5 fw-bolder'>Show More</button>
            </div>
            </Link>
        </div>
        
        <div className="col-md-4  my-3 col-10  m-auto ">
        <Link to={'/secondpicture'}>
          <div className="item bg-main rounded-5 "  >
            <img src={require('../../images/basking.jpg')} className='w-100 rounded-5' alt="" />
            <h2 className='text-white py-3 fw-bolder h6'>Basket Swing Chair</h2>
            <div className='d-flex justify-content-around align-items-center'>
                  <h6 className='px-3 text-muted py-1'> <span className=' text-white fw-bolder'>$188.00</span></h6>
                  <span className='d-flex px-3'>
                  <i className='fas fa-star text-warning px-1 fs-5'></i>
                  <h6 className='text-white'>4.9</h6>
                </span>
            </div>
            <button className='btn btn-outline-light w-50 mb-2 rounded-5 fw-bolder'>Show More</button>
          </div>
          </Link>
        </div>

        <div className="col-md-4 my-3 col-10 m-auto  ">
        <Link to={'/thirdpicture'}>
          <div className="item bg-main rounded-5 "  >
            <img src={require('../../images/chair.jpg')} className='w-100 rounded-5'  alt="" />
            <h2 className='text-white py-3 fw-bolder h6'>Recliner</h2>
            <div className='d-flex justify-content-around align-items-center'>
                  <h6 className='px-3 text-muted py-1'> <span className=' text-white fw-bolder'>$300.00</span></h6>
                  <span className='d-flex px-3'>
                  <i className='fas fa-star text-warning px-1 fs-5'></i>
                  <h6 className='text-white'>4.2</h6>
                </span>
            </div>
            <button className='btn btn-outline-light  w-50 mb-2 rounded-5 fw-bolder'>Show More</button>
          </div>
          </Link>
        </div>
        
      </div>
    </div>
  </section>
}

