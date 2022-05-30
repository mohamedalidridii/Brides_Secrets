import React from 'react';
import Image from 'next/image'
import { NavBarHome, Footer } from '../components';



export default function Home(){
  return (
    <div>
      <div className='bg-image'></div>
    <NavBarHome />
    <div className='Home-container'>
      <Image className='image-navbar' width={440} height={348} src="/LOGO.png"/>
      <button className='button-home' onClick={
          event =>  window.location.href="/vente"}>Vente</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/location"}>Location</button>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
    
  )
}
