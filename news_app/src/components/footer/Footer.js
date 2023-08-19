import React from 'react'
import './footer.css'
import { AiFillInstagram , AiFillFacebook , AiFillTwitterCircle , AiOutlineWhatsApp, AiOutlineMail , AiFillPhone} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footerMain'>
      <div className="footerContainer">
        <div className="links">
            <ul>
            <Link className='link' to=''><li className='footerLink'>About Us</li></Link>
            </ul>
        </div>
        <div className="links">
            <ul>
                <Link className='link' to=''><li className='socialList footerLink'> <AiFillTwitterCircle className='socialIcon'/>Twitter</li></Link>
                <Link className='link' to=''><li className='socialList footerLink'><AiOutlineWhatsApp className='socialIcon'/>Whatsapp</li></Link>
                <Link className='link' to=''><li className='socialList footerLink'><AiFillInstagram className='socialIcon'/>Instagram</li></Link>
                <Link className='link' to=''><li className='socialList footerLink'><AiFillFacebook className='socialIcon'/>facebook</li></Link>
            </ul>
        </div>
        <div className="contactDetails">
        <Link className='link' to=''><h2 className='contactNumber footerLink'><AiFillPhone className='socialIcon'/> +91 9876543210</h2></Link>
        <Link className='link' to=''><p className='emailId footerLink'><AiOutlineMail className='socialIcon'/>thedailybuzz@gmail.com</p></Link>
        </div>
      </div>
      <p style={{textAlign:"center"}}>© 2023 The Daily Buzz. All rights reserved</p>
    </div>
  )
}

export default Footer
