import React from 'react';
import LocationInviteeVoileeSoiree from '../components/LocationInviteeVoileeSoiree'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationInviteeVoileeSoireePage = ({locationsInviteeVoileeSoiree, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs articles</h2>
        <p>Robes d'invitation voilée de soirée</p>
      </div>
      <div className='products-container'>
        {locationsInviteeVoileeSoiree?.map(
          (locationInviteeVoileeSoiree) => <LocationInviteeVoileeSoiree key={locationInviteeVoileeSoiree._id} locationInviteeVoileeSoiree={locationInviteeVoileeSoiree} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationInviteeVoileeSoiree"]';
  const locationsInviteeVoileeSoiree =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsInviteeVoileeSoiree, bannerData}
  }
}
export default LocationInviteeVoileeSoireePage;