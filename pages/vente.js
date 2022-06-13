import React from 'react';
import Image from 'next/image'
import { NavBar, Footer } from '../components';
import { Layout } from '../components';
import { AiOutlineArrowRight} from 'react-icons/ai';


export default function LocationPage(){
  return (
    <div>
      <div className='bg-image'></div>
    <Layout>

    <div className='products-heading'>
      <h2>Nos articles</h2>
      <p>Categories</p>
      </div>
    
    <div className='Home-container'>
    
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Traditionnel</h3>
        <p></p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/venteTraditionnelNeuf"}><AiOutlineArrowRight size={12}/>Neuf</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/venteTraditionnelOccasion"}><AiOutlineArrowRight size={12}/>Occasion</button>
      </div>
      </div>
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Soirée</h3>
        <p></p>
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