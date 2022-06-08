import React from 'react';
import Image from 'next/image'
import { NavBar, Footer } from '../components';
import { Layout } from '../components';


export default function LocationPage(){
  return (
    <div>
      <div className='bg-image'></div>
    <Layout>

    <div className='products-heading'>
      <h2>Nos articles de vente</h2>
      <p>Categories</p>
      </div>
    
    <div className='Home-container'>
    
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Traditionnel</h3>
        <p>Nos robes de traditionnel</p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/venteTraditionnelNeuf"}>Neuf</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/venteTraditionnelOccasion"}>Occasion</button>
      </div>
      </div>
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Soirée</h3>
        <p>Nos robes de soirée</p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/venteSoireeNeuf"}>Neuf</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/venteSoireeOccasion"}>Occasion</button>
      </div>
      </div>
    </div>
    
    </Layout>
    </div>
  )
}