import React from 'react';
import LocationInviteeNonVoileeTraditionnel from '../components/LocationInviteeNonVoileeTraditionnel'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationInviteeNonVoileeTraditionnelPage = ({locationsInviteeNonVoileeTraditionnel, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs articles</h2>
        <p>Robes d'invitation non voilée de traditionnel</p>
      </div>
      <div className='products-container'>
        {locationsInviteeNonVoileeTraditionnel?.map(
          (locationInviteeNonVoileeTraditionnel) => <LocationInviteeNonVoileeTraditionnel key={locationInviteeNonVoileeTraditionnel._id} locationInviteeNonVoileeTraditionnel={locationInviteeNonVoileeTraditionnel} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationInviteeNonVoileeTraditionnel"]';
  const locationsInviteeNonVoileeTraditionnel =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsInviteeNonVoileeTraditionnel, bannerData}
  }
}
export default LocationInviteeNonVoileeTraditionnelPage;