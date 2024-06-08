import React from 'react'
import './css/Navbar2.css'

function Navbar2() {
  return (
    <>
        <div className='navbar2-outer'>

          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contents of Excellence</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cancer Care</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">IVF & Fentolity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">International Patients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Health Screening</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Careers</a>
            </li>
          </ul>
        </div>
    </>
  )
}

export default Navbar2