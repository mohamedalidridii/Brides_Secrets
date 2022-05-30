import React from 'react';
import Image from 'next/image'
import { NavBar, Footer } from '../components';
import { Layout } from '../components';


export default function LocationPage(){
  return (
    <Layout>

    {/* <div className='bg-image'></div> */}
    
    <div className='Home-container'>
    <div className='products-heading'>
      <h2>Nos robes de location</h2>
        <p>Categories</p>
      </div>
      <div className='flex-categories'>
    <div className='product-card'>
          <img src="/cardMariage.jpg"
          className="categories-image" 
          onClick={
            event =>  window.location.href="/locationMariage"}/>
        </div>
      <div className='product-card'>
          <img src="/cardSoiree.jpg"
          className="categories-image" 
          onClick={
            event =>  window.location.href="/locationSoiree"}/>
      </div>
      </div>
    </div>
    </Layout>
    
  )
}