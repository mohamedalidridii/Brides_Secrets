import React from 'react';
import LocationInviteeVoileeTraditionnel from '../components/LocationInviteeVoileeTraditionnel'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationInviteeVoileeTraditionnelPage = ({locationsInviteeVoileeTraditionnel, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs produits</h2>
        <p></p>
      </div>
      <div className='products-container'>
        {locationsInviteeVoileeTraditionnel?.map(
          (locationInviteeVoileeTraditionnel) => <LocationInviteeVoileeTraditionnel key={locationInviteeVoileeTraditionnel._id} locationInviteeVoileeTraditionnel={locationInviteeVoileeTraditionnel} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationInviteeVoileeTraditionnel"]';
  const locationsInviteeVoileeTraditionnel =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsInviteeVoileeTraditionnel, bannerData}
  }
}
export default LocationInviteeVoileeTraditionnelPage;