import React from 'react';
import LocationMarieetraditionnel from '../components/LocationMarieetraditionnel'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationMarieetraditionnelPage = ({locationsMarieetraditionnel, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs produits</h2>
        <p></p>
      </div>
      <div className='products-container'>
        {locationsMarieetraditionnel?.map(
          (locationMarieetraditionnel) => <LocationMarieetraditionnel key={locationMarieetraditionnel._id} locationMarieetraditionnel={locationMarieetraditionnel} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationMarieetraditionnel"]';
  const locationsMarieetraditionnel =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsMarieetraditionnel, bannerData}
  }
}
export default LocationMarieetraditionnelPage;