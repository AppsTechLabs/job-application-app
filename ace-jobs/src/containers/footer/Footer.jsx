import React from 'react'
import './footer.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Footer = () => {
  return (
   <footer className='bg-primary text-white pt-5 pb-4'>
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
           <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
             <h2 className='text-uppercase mb-4 font-weight-bold text-dark'>About Us</h2>
             <hr className='mb-4'></hr>
               <p className='text-light'>Earnest team committed to helping you, get employed with just any job of your choice</p>
           </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h2 className='text-uppercase mb-8 font-weight-bold text-dark'>Follow us</h2>
                     <hr className='mb-4'></hr>
                      <p>
                       <a href='#' className='text-light'>Whatsapp</a>
                      </p>
                       <p>
                        <a href='#' className='text-light'>Facebook</a>
                       </p>
                        <a href='#' className='text-light'>Twitter</a>
             </div>
                 <div className="row col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                   <h2 className='text-uppercase mb-4 font-weight-bold text-dark'>Contact</h2>
                   <hr class="mb-4"></hr>
                     <li className='fas fa-home mr-3'>Douala, Akwa</li>
                     <li className='fas fa-envelope mr-3'>AAIJA@gmail.com</li>
                     <li className='fas fa-phone mr-3'>+237 674903369</li>
                 </div>
                   <hr className="mb-4"></hr>
                 <div className="row d-flex justify_content-center">
                        <div>
                          <p>
                            copyright 2023 All Rights Reserved By : 
                             <a href="#">
                               <strong class="text-light">AAIJA</strong>
                             </a>
                          </p>         
                        </div>
                 </div>
                     <div className='row d-flex justify_content-center'>
                      <div className='text-center'>
                       <ul className='list-unstyled list-inline'>                     
                        <li className='list-in-line-item'>
                        <a href='#' className='text-dark'><i class="fab fa-facebook"></i></a>
                        </li>

                        <li className='list-in-line-item'>
                        <a href='#' className='text-dark'><i className="fab fa-google"></i></a>
                        </li>

                        <li className='list-in-line-item'>
                        <a href='#' className='text-dark'><i className="fab fa-twitter"></i></a>
                        </li>

                        <li className='list-in-line-item'>
                        <a href='#' className='text-dark'><i className="fab fa-youtube"></i></a>
                        </li>

                       </ul>
                      </div>
                     </div>

        </div>  
      </div>
    
   </footer>
  )
}

export default Footer