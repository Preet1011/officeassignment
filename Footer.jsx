import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
       <h4 className='text-center'>Made By Preet Tyagi</h4>
       <p className='text-centre mt-3'></p>
       <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link> | <Link to='/policy'>Privacy Policy</Link>
    </div>
  )
}

export default Footer