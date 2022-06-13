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
      <p>Categories</p>
      </div>
    <div className='Home-container'>
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Invitée</h3>
        <p></p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/invitation"}><AiOutlineArrowRight size={12}/>Cliquez ici</button>
      </div>
      </div>
      <div className='sub-category'>
      <div className='type-heading'>
        <h3>Mariée</h3>
        <p></p>
      </div>
      <div className='flex-categories'>
      <button className='button-home' onClick={
          event =>  window.location.href="/mariage"}><AiOutlineArrowRight size={12}/>Cliquez ici</button>
      </div>
      </div>
    </div>
    </Layout>
    </div>
  )
}