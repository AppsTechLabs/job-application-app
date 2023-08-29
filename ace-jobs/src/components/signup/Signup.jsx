import React from 'react'

const Signup = () => {
  return (
    <div>
         <div> 
          <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mx-auto cf-container">
                <form action="" method="post">
                  <div class="cf-cover">
                  <div class="session-title row">
                    <h2>Sign Up</h2>
                    
                  </div>
                  
                  <div class="form-row row">
                    <div class="col-md-5">
                      <label for="">First Name</label>
                      <input type="text" required="" placeholder="Enter First Name" class="form-control"/>
                      <br/>
                    </div>
                    <div class="col-md-5">
                      <label for="">Last Name</label>
                      <input type="text" placeholder="Enter Last Name" class="form-control"/>
                      <br/>
                    </div>
                  </div>
                  <div class="form-row row">
                    <div class="col-md-10">
                      <label for="">Address</label>
                      <input type="text" placeholder="Enter Your Address" class="form-control"/>
                      <br/>
                    </div>

                  </div>
                  <div class="form-row row">
                    <div class="col-md-10">
                      <label for="">Email</label>
                      <input type="text" placeholder="name@example.com" class="form-control"/>
                      <br/>
                    </div>
                  </div>
                  <div class="form-row row">
                    <div class="col-md-10">
                      <label for="">Phone number</label>
                      <input type="int" placeholder="Enter Phone Number" class="form-control"/>
                      <br/>
                    </div>
                  </div>
                  <div class="form-row row">
                    <div class="col-md-10">
                      <label for="">Password</label>
                      <input type="int" placeholder="Enter Password" class="form-control"/>
                      <br/>
                    </div>
                  </div>
                  <div class="form-row row">
                    <div class="col-md-10">
                      <label for="">Confirm Password</label>
                      <input type="int" placeholder="Confirm Password" class="form-control"/>
                    </div>
                  </div>
                  <br/>
                  

                                          <form action="#">
                      <label for="lang">Gender</label>
                      <select name="Gender" id="lang">
                        <option value="Male">Male</option>
                        <option value="Femaile">Female</option>
                      </select>
                                    </form><br/>


                      
                  
                  
                  <div class="form-row row">
                    <div class="md-10">
                     <div class="col-md-10">   
                      <center><button class="btn btn-primary w-50">Submit</button></center><hr/>
                      <center><p>Already have an account? <font color="#1E90FF"><u>Login</u></font></p></center>
                     </div>
                    </div>
                  </div>
                      
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </div>
    </div>
  )
}

export default Signup