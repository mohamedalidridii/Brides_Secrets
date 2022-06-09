import React from 'react';
import VenteSoireeNeuf from '../components/VenteSoireeNeuf'
import { Layout } from '../components';
import { client } from '../lib/client';

const VenteSoireeNeufPage = ({ventesTraditionnelNeuf, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs articles</h2>
        <p>Robes de soirée neufs</p>
      </div>
      <div className='products-container'>
        {ventesTraditionnelNeuf?.map(
          (venteSoireeNeuf) => <VenteSoireeNeuf key={venteSoireeNeuf._id} venteSoireeNeuf={venteSoireeNeuf} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="venteSoireeNeuf"]';
  const ventesTraditionnelNeuf =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ ventesTraditionnelNeuf, bannerData}
  }
}
export default VenteSoireeNeufPage;