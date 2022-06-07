import React from 'react';
import LocationInviteeNonVoileeSoiree from '../components/LocationInviteeNonVoileeSoiree'
import { Layout } from '../components';
import { client } from '../lib/client';

const LocationInviteeNonVoileeSoireePage = ({locationsInviteeNonVoileeSoiree, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs produits</h2>
        <p></p>
      </div>
      <div className='products-container'>
        {locationsInviteeNonVoileeSoiree?.map(
          (locationInviteeNonVoileeSoiree) => <LocationInviteeNonVoileeSoiree key={locationInviteeNonVoileeSoiree._id} locationInviteeNonVoileeSoiree={locationInviteeNonVoileeSoiree} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="locationInviteeNonVoileeSoiree"]';
  const locationsInviteeNonVoileeSoiree =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ locationsInviteeNonVoileeSoiree, bannerData}
  }
}
export default LocationInviteeNonVoileeSoireePage;