import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Details() {




  return <section id='details' className='d-flex align-items-center justify-content-center'>

    <div className="container ">
      <div className="row text-center m-auto g-5">

        <div className="col-md-4 ">
            <Link to={'/firstpicture'}>
            <div className="item bg-main rounded-5 "  >
            <img src={require('../../images/office.jpg')} className='w-100 rounded-5'  alt="" />
            <h2 className='text-white py-4 fw-bolder'>Wooden Table</h2>
            </div>
            </Link>
        </div>
        
        <div className="col-md-4">
        <Link to={'/secondpicture'}>
          <div className="item bg-main rounded-5"  >
            <img src={require('../../images/basking.jpg')} className='w-100 rounded-5'  alt="" />
            <h2 className='text-white py-4 fw-bolder'>Basket Swing Chair</h2>
          </div>
          </Link>
        </div>

        <div className="col-md-4">
        <Link to={'/thirdpicture'}>
          <div className="item bg-main rounded-5"  >
            <img src={require('../../images/chair.jpg')} className='w-100 rounded-5'  alt="" />
            <h2 className='text-white py-4 fw-bolder'>Recliner</h2>
          </div>
          </Link>
        </div>
        
      </div>
    </div>
  </section>
}

