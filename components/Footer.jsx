import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiOutlineCopyright} from 'react-icons/ai'
import { CgFacebook} from 'react-icons/cg'
import { GoLocation} from 'react-icons/go'
import { MdOutlineLocalPhone} from 'react-icons/md'

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <p className='icons'>
        <CgFacebook size={20} color = "#6d7278" onClick={
          event =>  window.location.href="https://www.facebook.com/Boutiquedelocationrobesdemariage"}/>
        <AiFillInstagram size={20} color = "#6d7278" onClick={
          event =>  window.location.href="https://www.instagram.com/brides.secret2020"}/>
        </p> */}

      <div className='type-heading'>
      <p><MdOutlineLocalPhone color='#6d7278'/> 93 601 103 / 28 312 668</p>
      <p><GoLocation color='#6d7278'/> 181 cité el agba bretelle route khniss près de mosquée elagba 5000 monastir, Tunisia</p>

      <p>2022 Bride's Secrets All rights reserved</p>
      </div>
        
      </div>
  )
}

export default Footer