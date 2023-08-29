import React from 'react'
import './apply.css';

const Button = () => {
  return (
<div>
                            <div class="container-fluid"/>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6 mx-auto cf-container">
                                        <form action="" method="post">
                                            <div class="cf-cover">
                                                <div class="session-title row">
                                                    <h2>Apply</h2>
                                                </div>    
                                                </div>
                                                <br/>
                                                <div class="form-row row">
                                                    <div class="col-md-10">
                                                        <label for="">First Name</label>
                                                        <input type="text" required="" placeholder="Enter First Name" class="form-control"/>
                                                        <br/>
                                                    </div>
                                                </div>    
                                                    <div class="col-md-10">
                                                        <label for="">Last Name</label>
                                                        <input type="text" placeholder="Enter Last Name" class="form-control"/>
                                                        <br/>
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
                                                    <div class="form-row row">
                                                    <div class="col-md-10">
                                                        <label for="">Date of Birth</label>
                                                        <input type="int" placeholder="dd/mm/yy" class="form-control"/>
                                                        <br/>
                                                    </div>

                                                    <div class="mb-3">
                                                        <div class="col-md-10">
                                                        <label for="formFileMultiple" class="form-label">Educational Certifications(optional)</label>
                                                        <input class="form-control" type="file" id="formFileMultiple" multiple/>
                                                        </div>
                                                        </div>


                                                </div>
                                                <div class="form-group">
                                                    <div class="col-md-10">
                                                    <label for="disc">Biography</label>
                                                    <textarea class="form-control" rows="3"></textarea>
                                                    </div><br/>
                                                </div>

                                                <form action="#">
                      <label for="lang">Gender</label>
                      <select name="Gender" id="lang">
                        <option value="Male">Male</option>
                        <option value="Femaile">Female</option>
                      </select>
                                    </form><pre/>
                                    

                                                <div class="form-row row">
                                                        <div class="md-10">
                                                        <div class="col-md-10">   
                                                        <center><button class="btn btn-primary w-50">Apply Here</button></center>
                                                        </div>
                                                        </div>
                                                </div>
                                    
                                            </div>
                                        </form>
                                       
                                </div>
                            </div>
</div>
</div>
         )
}

export default Button;