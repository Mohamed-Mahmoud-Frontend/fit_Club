import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import instgram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
    <hr/>

    <div className='footer'>
    <div className='social-links'>
      <img src={Github} alt=""/>    
<img src={instgram} alt=""/>    
<img src={linkedin} alt=""/>  
    </div>
  
    <div className='logo-f'>
        <img src={logo} alt=""/>
    </div>
    </div>
    <div className='blur b-f'></div>
    <div className='blur b-f2'></div>
      
    
    </div>
  )
}

export default Footer