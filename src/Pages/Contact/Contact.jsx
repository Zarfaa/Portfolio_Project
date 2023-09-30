import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
    <div className='contact_Container'>

    <div className='col-md-6 col-sm-4 ms-5 Contact_details  '>
      <h4>Get In Touch</h4>
      <p>Lorem ipsum dolor sit amet consectetur. Quis orci sem sit id erat cras ut. Natoque sed hac enim ultrices varius orci posuere in velit. Pellentesque porta ullamcorper amet purus.</p>
      <div className='d-flex gap-5'>
      <div><h3>Phone</h3><span>Lorem</span></div>
      <div><h3>Email</h3><span>Lorem ipsum dolor sit amet</span></div>
      </div>

    </div>
    <div className='col-md-6 col-sm-4'>
      <h1 className='text_vertical'>THANK</h1>
      <h1  className='text'>You</h1>
    </div>

    </div>
    </>
  )
}

export default Contact