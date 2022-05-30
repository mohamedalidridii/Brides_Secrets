import React from 'react';
import Vente from '../components/Vente'
import { Layout } from '../components';
import { client } from '../lib/client';

const VentePage = ({ventes, bannerData}) => {
  return (
    <Layout>
      <div className='products-heading'>
        <h2>Nos meilleurs produits</h2>
        <p></p>
      </div>
      <div className='products-container'>
        {ventes?.map(
          (vente) => <Vente key={vente._id} vente={vente} />)}
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type =="vente"]';
  const ventes =await client.fetch(query);
  const bannerQuery = '*[_type =="banner"]';
  const bannerData =await client.fetch(bannerQuery);
  return {
    props:{ ventes, bannerData}
  }
}
export default VentePage;