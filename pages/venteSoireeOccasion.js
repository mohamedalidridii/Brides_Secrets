import React from 'react';
import VenteSoireeOccasion from '../components/VenteSoireeOccasion'
import { Layout } from '../components';
import { client } from '../lib/client';

const VenteSoireeOccasionPage = ({ventesTraditionnelNeuf, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs produits</h2>
        <p></p>
      </div>
      <div className='products-container'>
        {ventesTraditionnelNeuf?.map(
          (venteSoireeOccasion) => <VenteSoireeOccasion key={venteSoireeOccasion._id} venteSoireeOccasion={venteSoireeOccasion} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="venteSoireeOccasion"]';
  const ventesTraditionnelNeuf =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ ventesTraditionnelNeuf, bannerData}
  }
}
export default VenteSoireeOccasionPage;