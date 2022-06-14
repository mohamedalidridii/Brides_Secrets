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
      <h2>Nos articles</h2>
      <p>Location-Invitation</p>
      </div>
    
    <div className='Home-container'>
    
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Voilée</h3>
        <p></p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/locationInviteeVoileeTraditionnel"}><AiOutlineArrowRight size={12}/>Traditionnel</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/locationInviteeVoileeSoiree"}><AiOutlineArrowRight size={12}/>Soirée</button>
      </div>
      </div>
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Non Voilée</h3>
        <p></p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/locationInviteeNonVoileeTraditionnel"}><AiOutlineArrowRight size={12}/>Traditionnel</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/locationInviteeNonVoileeSoiree"}><AiOutlineArrowRight size={12}/>Soirée</button>
      </div>
      </div>
    </div>
    </Layout>
    </div>
  )
}