import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute top-0  fw-bolder">
  <div className="container">
    <span className="navbar-brand text-main fs-4"><i class="fa-solid fa-chair px-2 fw-bolder"></i><span>Furniture-Store</span></span>
    <button className="navbar-toggler bg-main me-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-main  fw-bolder"></span>
    </button>
    <div className="collapse navbar-collapse text-main ms-5 ps-5" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-5 ps-5">
        <li className="nav-item px-2">
          <Link className="nav-link active text-main fs-5 fw-bolder" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item px-2 ">
          <Link className="nav-link text-main fs-5 " to="details">Details</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  </>
}
