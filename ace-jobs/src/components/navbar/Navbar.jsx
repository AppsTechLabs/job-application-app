import React from 'react';
import './navbar.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import logo1 from '../../assets/images/logo1.png'



const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light shadow p-1 mb-2 '>
        <div className='container-fluid'>
          <img src={logo1} alt='brand' className='img '/>
          <button class="navbar-toggler btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse justify-content-end me-5' id='navbarSupportedContent'>
            <ul className='navbar-nav me-4 mb-2 mb-lg-0 gap-lg-5'>
              <li className="nav-item">
                <a className="nav-link active link-primary nav-tabs fs-4" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-primary fs-4" href="#">About</a>
              </li>
              <li className="nav-item dropdown"> 
                <a className="nav-link dropdown-toggle link-primary fs-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Jobs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item  text-primary fs-5" href="#">Create Jobs</a></li>
                  <li><a className="dropdown-item text-primary fs-5" href="#">Search Jobs</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary fs-4" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
              </li>
            </ul>

            <div className="d-grid gap-2 d-md-flex">
              <button className="btn btn-outline-primary me-md-3 fs-4" type="button">Login</button>
              <button className="btn btn-outline-primary fs-4" type="button">Signup</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar