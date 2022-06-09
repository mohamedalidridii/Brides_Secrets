import React from 'react';
import VenteTraditionnelOccasion from '../components/VenteTraditionnelOccasion'
import { Layout } from '../components';
import { client } from '../lib/client';

const VenteTraditionnelOccasionPage = ({ventesTraditionnelOccasion, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs articles</h2>
        <p>Robes de traditionnel occasions</p>
      </div>
      <div className='products-container'>
        {ventesTraditionnelOccasion?.map(
          (venteTraditionnelOccasion) => <VenteTraditionnelOccasion key={venteTraditionnelOccasion._id} venteTraditionnelOccasion={venteTraditionnelOccasion} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="venteTraditionnelOccasion"]';
  const ventesTraditionnelOccasion =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ ventesTraditionnelOccasion, bannerData}
  }
}
export default VenteTraditionnelOccasionPage;