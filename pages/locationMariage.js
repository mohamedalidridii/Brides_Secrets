import React from 'react';
import LocationMariage from '../components/LocationMariage'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationMariagePage = ({ locationsMariage }) => {
  return (
    <Layout>
      <div className='products-heading'>
      <h2>Robes de mariage</h2>
        <p>Nos meilleurs produits</p>
      </div>
      <div className='products-container'>
        {locationsMariage?.map(
          (locationMariage) => <LocationMariage key={locationMariage._id} locationMariage={locationMariage} />)}
      </div>
      </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationMariage"]';
  const locationsMariage =await client.fetch(query);

  return {
    props:{ locationsMariage }
  }
}
export default LocationMariagePage;