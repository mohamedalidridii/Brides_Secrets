import React from 'react';
import Image from 'next/image'
import { NavBarHome, HeroBanner, Footer } from '../components';
import { client } from '../lib/client';



const Home = ({ bannerData }) => (
    <div>
      <div className='bg-image'></div>
    <NavBarHome />
    <div className='Home-container'>
      <Image className='image-navbar' width={440} height={348} src="/LOGO.png"/>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
      <button className='button-home' onClick={
          event =>  window.location.href="/vente"}>Vente</button>
      <button className='button-home' onClick={
          event =>  window.location.href="/location"}>Location</button>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );

export const getServerSideProps = async () =>{
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props:{bannerData}
  }
}

export default Home;
