import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import { CgFacebook} from 'react-icons/cg'


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className='flex'>
    <div className='navbar-container'>
      <Image className='logo' src="/LOGO.png" width={228} height={177} onClick={
          event =>  window.location.href="/"}/>
    </div>
    <div className='nav-navbar'>
      <div className='social-media'>
        <CgFacebook size={20} color = "#6d7278" onClick={
          event =>  window.location.href="https://www.facebook.com/Boutiquedelocationrobesdemariage"}/>
        <AiFillInstagram size={20} color = "#6d7278" onClick={
          event =>  window.location.href="https://www.instagram.com/brides.secret2020"}/>
      </div>
      <div className={`Nav-items ${isOpen && "open"}`}>
      <img className='image-navbar' src="/LOGO.png"/>
      <button className='button-home' onClick={
          event =>  window.location.href="/"}>Home</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/vente"}>Vente</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/location"}>Location</button>
      
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
    </div>
    </div>
    


  )
}

export default NavBar
