import React from 'react'
import { Link } from 'react-router-dom'
import Chat from '../Chat/Chat'




export default function Home() {
  return <section id='home' className='d-flex justify-content-center align-items-center position-relative'>

    <Chat/>

    <div className="layout d-flex justify-content-center align-items-center">
    <div className="text-home">
      <h1 className='text-main h1-main fw-bolder'>Furniture</h1>
      <Link to="/details"><button className='btn btn-outline-main fw-bolder mt-5 mx-5 px-4 py-2'>Show More</button></Link>
    </div>
    </div>
  </section>
}
