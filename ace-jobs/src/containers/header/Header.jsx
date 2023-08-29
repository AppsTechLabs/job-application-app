import React from 'react';
import './header.css';
import searchJob from "../../assets/images/searchJob.png"


const Header = () => { 
  return (
    <>
      <div className=' header__container'>
        <div className=' header__container-content'>
          <h1 className='text-dark fs-1 title '>Welcome to<span className='text-primary fs-1 title'> AAIJA!</span></h1>
          <p>A place where we find you a job at your own convinient. all you need to do is to create an account and a search for a job at your own paste Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, numquam!</p>
          <div>
            <button className='btn btn-outline-primary btn-lg'>Login</button>
          </div> 
        </div>
        <div className='header__container-image'>
          <img src={searchJob} alt="brand" />
        </div>
      </div>
    </>
  )
}

export default Header