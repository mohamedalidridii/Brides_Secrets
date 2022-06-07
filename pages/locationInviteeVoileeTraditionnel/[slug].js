import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';


const locationInviteeVoileeTraditionnelDetails = ({ locationInviteeVoileeTraditionnel, locationsInviteeVoileeTraditionnel }) => {
    const { image, name, details, price } = locationInviteeVoileeTraditionnel;
    const [index, setIndex]= useState(0);
  return (
    <Layout>
        <div className='product-detail-container'>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} className="product-detail-image" />
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img key="{item}"
                            src={urlFor(item)}
                            className={ i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                    />
                    ))}
                    </div>
                </div>
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <h4>Details: </h4>
                    <p>{details}</p>
                 {/* <p className="price">{price}DT</p> */}
                </div>
        </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "locationInviteeVoileeTraditionnel"] { 
        slug {
            current
        }
    }
    `;
    const locationsInviteeVoileeTraditionnel =await client.fetch(query);
    const paths = locationsInviteeVoileeTraditionnel.map((locationInviteeVoileeTraditionnel) => ({
        params:  {
            slug: locationInviteeVoileeTraditionnel.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "locationInviteeVoileeTraditionnel" && slug.current == '${slug}'][0]`;
    const locationInviteeVoileeTraditionnelQuery = '*[_type == "locationInviteeVoileeTraditionnel"]'

    const locationInviteeVoileeTraditionnel = await client.fetch(query);
    const locationsInviteeVoileeTraditionnel = await client.fetch(locationInviteeVoileeTraditionnelQuery);

    return {
      props:{ locationsInviteeVoileeTraditionnel, locationInviteeVoileeTraditionnel }
    }
  }
export default locationInviteeVoileeTraditionnelDetails