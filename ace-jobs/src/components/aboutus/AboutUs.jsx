import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './about.css';
import aboutUs from '../../assets/images/aboutUs.jpg';
import about from '../../assets/images/about.jpg'



const AboutUs = () => {
  return (
    <div>
         <section class="py-3 py-md-5 py-xl-8">
            <div class="container">
              <div className="container1"> <img src={about} class="img" width="100%"  alt="content"/> </div>
              <h1 class ="font-weight-bold">Welcome to AAIJA Where Your Carrier Begins</h1>
              <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                <div class="col-12 col-lg-6">
                  <img class ="img-fluid rounded" loading="lazy"src={aboutUs} alt = "content"/>  
                  
                </div>
                <div class="col-12 col-lg-6">
                  <div class="row justify-content-xl-center">
                    <div class="col-12 col-xl-10">
                      <h2 class="h1 mb-3 font-weight-bold">Who are we!</h2>
                      <p class="lead fs-4 mb-3 mb-xl-5">With some experience and deep knowledge of our tools and technologies, we have a proven track record of success and we are constantly pushing ourselves to stay ahead of the curve.</p>
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </div>
                        <div>
                          <p class="fs-5 m-0">Our evolution procedure is super intelligent.</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </div>
                        <div>
                          <p class="fs-5 m-0">We deliver services beyond expectations.</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center mb-4 mb-xl-5">
                        <div class="me-3 text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </div>
                        <div>
                          <p class="fs-5 m-0">Let help you to reach your objectives.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div> <hr />
                      <h1 class="text-center">Our Story</h1>
                      <p class ="fs-5 m-0">On AAIJA , we’ve come a long way from the days of paper job postings pinned to boards. We draw on a years of experience helping Cameroonains succeed in the labour market</p>
                        <div class="container text-center">
                          <div class="row">
                            <div class="col">
                              <div class="card" width="18rem">
                                <img src="" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <p class="card-text">Today, AAIJA remains the leading source of jobs and labour market information in Our country.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card" width="18rem">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <p class="card-text">AAIJA keeps improving. We’re always learning from our users and researching new and better ways to help..</p>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="card" width="18rem">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                  <p class="card-text">As a key player in the Cameroon labour market, AAIJA make job search and recruitment easier..</p>
                                </div>
                              </div>
                            </div>
                          </div>
                       </div>
              
              </div>

            </div>
          </section>
          

    </div>
  )
}

export default AboutUs;
