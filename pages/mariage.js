import React from 'react';
import Image from 'next/image'
import { NavBar, Footer } from '../components';
import { Layout } from '../components';
import { AiOutlineArrowRight} from 'react-icons/ai'

export default function LocationPage(){
  return (
    <div>
      <div className='bg-image'></div>
    <Layout>

    <div className='products-heading'>
      <h2>Nos articles de location</h2>
      <p>Location-Mariage</p>
      </div>
    
    <div className='Home-container'>
    
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Traditionnel</h3>
        <p>Nos robes de traditionnel</p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/locationsMarieetraditionnel"}><AiOutlineArrowRight size={12}/>Cliquez ici</button>
      </div>
      </div>
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Soirée</h3>
        <p>Nos robes de Soirée</p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/locationMarieeSoiree"}><AiOutlineArrowRight size={12}/>Cliquez ici</button>
      </div>
      </div>
    </div>
    </Layout>
    </div>
  )
}