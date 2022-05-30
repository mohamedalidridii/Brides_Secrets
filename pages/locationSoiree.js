import React from 'react';
import LocationSoiree from '../components/LocationSoiree'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationSoireePage = ({locationsSoiree, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
      <h2>Robes de soirée</h2>
        <p>Nos meilleurs produits</p>
      </div>
      <div className='products-container'>
        {locationsSoiree?.map(
          (locationSoiree) => <LocationSoiree key={locationSoiree._id} locationSoiree={locationSoiree} />)}
      </div>
      </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationSoiree"]';
  const locationsSoiree =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsSoiree, bannerData}
  }
}
export default LocationSoireePage;