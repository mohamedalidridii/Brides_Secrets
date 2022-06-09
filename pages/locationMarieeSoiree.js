import React from 'react';
import LocationMarieeSoiree from '../components/LocationMarieeSoiree'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationMarieeSoireePage = ({locationsMarieeSoiree, bannerData}) => {
  return (
    <div>
      <div className='bg-image'></div>
    <Layout>
      <div className='products-heading'>
        <h2> Nos meilleurs articles</h2>
        <p>Robes de mariage de soirée</p>
      </div>
      <div className='products-container'>
        {locationsMarieeSoiree?.map(
          (locationMarieeSoiree) => <LocationMarieeSoiree key={locationMarieeSoiree._id} locationMarieeSoiree={locationMarieeSoiree} />)}
      </div>
    </Layout>
    </div>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationMarieeSoiree"]';
  const locationsMarieeSoiree =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsMarieeSoiree, bannerData}
  }
}
export default LocationMarieeSoireePage;