import React from 'react';
import VenteTraditionnelNeuf from '../components/VenteTraditionnelNeuf'
import { Layout } from '../components';
import { client } from '../lib/client';

const VenteTraditionnelNeufPage = ({ventesTraditionnelNeuf, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs articles</h2>
        <p>Robes de traditionnel neufs</p>
      </div>
      <div className='products-container'>
        {ventesTraditionnelNeuf?.map(
          (venteTraditionnelNeuf) => <VenteTraditionnelNeuf key={venteTraditionnelNeuf._id} venteTraditionnelNeuf={venteTraditionnelNeuf} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="venteTraditionnelNeuf"]';
  const ventesTraditionnelNeuf =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ ventesTraditionnelNeuf, bannerData}
  }
}
export default VenteTraditionnelNeufPage;