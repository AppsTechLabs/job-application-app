import React from 'react';
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='bg-primary mb-5'>
      <h1 className='text-dark text-center p-5'>Our Popular Job Searches</h1>
      <div className='d-flex justify-content-around'>
        <ul className='list'>
          <li className='text-white'> 
            Communications
          </li>
          <li className='text-white'>
            Analyst
          </li>
          <li className='text-white'> 
            Bookkeeping
          </li>
          <li className='text-white'>
            Call Center
          </li>
        </ul>

        <ul className='list'>
          <li className='text-white'>
            Accounting
          </li>
          <li className='text-white'>
            Customer Service
          </li>
          <li className='text-white'>
            Data Entry
          </li>
          <li className='text-white'>
            Developer
          </li>
        </ul>

        <ul className='list'>
          <li className='text-white'>
            Education
          </li>
          <li className='text-white'>
            Finance
          </li>
          <li className='text-white'>
           Graphics Designing
          </li>
          <li className='text-white'>
            Vedio Editing
          </li>
        </ul>

        <ul className='list'>
          <li className='text-white'>
            Marketing
          </li>
          <li className='text-white'>
            Nursing
          </li>
          <li className='text-white'>
            Project Manager
          </li>
          <li className='text-white'>
            Writer
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials