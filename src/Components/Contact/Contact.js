import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const from =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dh3qvwg', 'template_5dkxhiy', from.current, '7WfBcyweSUKSoR00V')

          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Contact' id='Contact-us'>
      <div className='left-C'>
      <hr/>
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP
            </span>
        </div>
        <div>
        <span className='stroke-text'>YOUR BODY
        </span>
        <span>WITH US?
        </span>
    </div>
      </div>
      <div className='right-C'>
        <form ref={from} className='email-container' onSubmit={sendEmail}>
        <input type="email" name="user-email" placeholder='Enter Your Email Address'/>
        <button type="Contact Now" className='btn btn-C'>Contact Now</button>
            
        </form>
      </div>
    </div>
  )
}
export default Contact
