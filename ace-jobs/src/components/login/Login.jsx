import React from 'react'
import './Login.css';
// ace-jobs/src/components/login/Login.jsx
// https://github.com/AppsTechLabs/job-application-app/blob/main/ace-jobs/src/components/login/Login.jsx

const Login = () => {
  return (
    <div>
            <div class="back">


                <div class="div-center">
            
            
                <div class="content">
            
            
                    <h3>Login</h3>
                    <hr />
                    <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                                <br/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                
                                <div class="btn-text-right">
  	                                <button type="button" class="btn btn-link">Forgot Password?</button>
                                </div>
                                <br/>

                                <center><button type="submit" class="btn btn-primary">Login</button></center>
                            <hr />
                            <center><p>Don't have an account?<button type="button" class="btn btn-link">Sign Up</button></p></center>
                            </div>
                           
                    </form>
                    
            
                </div>
            
            
                </div>
            </div>
    </div>
         )
}
export default Login;
