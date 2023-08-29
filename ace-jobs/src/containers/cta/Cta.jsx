import React from 'react';
import './cta.css';
import login from "../../assets/images/login.png";
import apply from "../../assets/images/apply.png";
import job from "../../assets/images/job.png";


const Cta = () => {
  return (
  <>
    <h1 className='text-center text-primary'>How to get started!</h1>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner justify-content-center align-content-center">
        <div className="carousel-item active">
          <img src={login} className="d-block w-50 m-auto mb-5" alt="brand" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark fs-1'>Step One</h5>
            <p className='text-dark fs-3'>Start by creating an account to be able to apply for a job</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={job} className="d-block w-50 m-auto mb-5" alt="brand" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark fs-1'>Step Two</h5>
            <p className='text-dark fs-3'>After you create an Account, navigate to the jobs section and search for a required job </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={apply} className="d-block w-50 m-auto mb-5" alt="brand" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className='text-dark fs-1'>Step Three</h5>
            <p className='text-dark fs-3'> After searching for a job, Apply for a job according to your preferences </p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>
  )
}

export default Cta