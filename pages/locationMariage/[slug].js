import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';

const locationMariageDetails = ({ locationMariage, locationsMariage }) => {
    const { image, name, details, price } = locationMariage;
    const [index, setIndex]= useState(0);
  return (
    <Layout>
        <div className='product-detail-container'>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} className="product-detail-image" />
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img
                            src={urlFor(item)}
                            className={ i === index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                    />
                    ))}
                    </div>
                </div>
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <p className="price">{price} DT/Jour</p>
                    <h4>Details: </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sagittis nisl rhoncus mattis rhoncus. Massa sed elementum tempus egestas sed sed risus pretium quam.
                        </p>
                    
                </div>
        </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "location_soiree"] { 
        slug {
            current
        }
    }
    `;
    const locationsMariage =await client.fetch(query);
    const paths = locationsMariage.map((locationMariage) => ({
        params:  {
            slug: locationMariage.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "locationMariage" && slug.current == '${slug}'][0]`;
    const locationMariageQuery = '*[_type == "locationMariage"]'

    const locationMariage = await client.fetch(query);
    const locationsMariage = await client.fetch(locationMariageQuery);

    return {
      props:{ locationsMariage, locationMariage }
    }
  }
export default locationMariageDetails