import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './contactus.css';
import contactUs from '../../assets/images/contactUs.jpg';



const Contactus = () => {
  return (
  <div>
    <div className="container">
      <div className="container1"> <img src={contactUs} class="img" width="100%"  alt="content"/> </div>
    
          <div className="row">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">Enter Your Names</label>
              <input type="text" className="form-control" placeholder="Name" aria-label="Name"></input>
            </div>
          </div>
       
          <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">Your Subject</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Job seeker for long "></input>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="button" className="btn btn-primary">SendMessage</button>
          </div>
          
          

      
    </div>
  </div>


    
    

  )
}

export default Contactus;
