import React from 'react';
import './section.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import happy from "../../assets/images/happy.png";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";
import img5 from "../../assets/images/img5.jpeg";

const Section = () => {

  // const data = [
  //   {
  //     id: 1,
  //     title: 'Python Dev',
  //     desc: 'we are looking for a python developer, with at least 2years experience and must be a female',
  //     icon: '',
  //   },

  //   {
  //     id: 2,
  //     title: 'Python Dev',
  //     desc: 'we are looking for a python developer, with at least 2years experience and must be a female',
  //     icon: '',
  //   },

  //   {
  //     id: 3,
  //     title: 'Python Dev',
  //     desc: 'we are looking for a python developer, with at least 2years experience and must be a female',
  //     icon: '',
  //   },

  //   {
  //     id: 4,
  //     title: 'Python Dev',
  //     desc: 'we are looking for a python developer, with at least 2years experience and must be a female',
  //     icon: '',
  //   },

  //   {
  //     id: 5,
  //     title: 'Python Dev',
  //     desc: 'we are looking for a python developer, with at least 2years experience and must be a female',
  //     icon: '',
  //   },

  //   {
  //     id: 6,
  //     title: 'Python Dev',
  //     desc: 'we are looking for a python developer, with at least 2years experience and must be a female',
  //     icon: '',
  //   },
  // ]


  return (
    <> 
      <h1 className='text-center mt-5 mb-5 text-primary'>Our Avaliable Jobs </h1>
      <div className='d-flex justify-content-around flex-wrap row-2 container gap-3 mb-5'>
        <div className="card mb-3 div">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src={happy} class="img-fluid rounded-start title " alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='d-flex justify-content-between'>
                  <p class="card-text"><small class="text-muted">updated 3 mins ago</small></p>
                  <button className='btn btn-primary'>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 div">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src={img1} class="img-fluid rounded-start title" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='d-flex justify-content-between'>
                  <p class="card-text"><small class="text-muted">updated 3 mins ago</small></p>
                  <button className='btn btn-primary'>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 div">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src={img2} class="img-fluid rounded-start title" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='d-flex justify-content-between'>
                  <p class="card-text"><small class="text-muted">updated 3 mins ago</small></p>
                  <button className='btn btn-primary'>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 div">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src={img3} class="img-fluid rounded-start title" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='d-flex justify-content-between'>
                  <p class="card-text"><small class="text-muted">updated 3 mins ago</small></p>
                  <button className='btn btn-primary'>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 div">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src={img4} class="img-fluid rounded-start title" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='d-flex justify-content-between'>
                  <p class="card-text"><small class="text-muted">updated 3 mins ago</small></p>
                  <button className='btn btn-primary'>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 div">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src={img5} class="img-fluid rounded-start title" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className='d-flex justify-content-between'>
                  <p class="card-text"><small class="text-muted">updated 3 mins ago</small></p>
                  <button className='btn btn-primary'>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Section