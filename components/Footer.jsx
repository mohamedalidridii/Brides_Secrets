import React from 'react'
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import { CgFacebook} from 'react-icons/cg'
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Bride's Secrets All rights reserved</p>
      <p className='icons'>
        <CgFacebook size={20} color = "#6d7278" onClick={
          event =>  window.location.href="https://www.facebook.com/Boutiquedelocationrobesdemariage"}/>
        <AiFillInstagram size={20} color = "#6d7278" onClick={
          event =>  window.location.href="https://www.instagram.com/brides.secret2020"}/>
        </p>
      </div>
  )
}

export default Footer