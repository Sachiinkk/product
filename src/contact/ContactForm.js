import React from 'react'
import './contact.css'
const ContactForm = () => {
  return (
    <>
      <div className="cont">
        <div className="contact">
          <h1 className='help'>How May I Help You ?</h1>
          <p>Do you have a question or are you interested in working with my team and me </p>

        </div>
        <div className="main">
          <div className='roof'>
            <h1>Connect Us : </h1>
            <hr />
            <div className="div">
            <i className='fa fa-facebook me-2'></i>
            <i className='fa fa-instagram me-2'></i>
            <i className='fa fa-twitter me-2'></i>
            <i className='fa fa-snapchat me-2'></i>
            <i className='fa fa-github me-2'></i>
            <i className='fa fa-whatsapp me-2'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm;
