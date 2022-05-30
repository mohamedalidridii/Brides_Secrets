import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';
import { FiArrowLeft } from "react-icons/fi";
const locationSoireeDetails = ({ locationSoiree, locationsSoiree }) => {
    const { image, name, details, price } = locationSoiree;
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
    const query = `*[_type == "locationSoiree"] { 
        slug {
            current
        }
    }
    `;
    const locationsSoiree =await client.fetch(query);
    const paths = locationsSoiree.map((locationSoiree) => ({
        params:  {
            slug: locationSoiree.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "locationSoiree" && slug.current == '${slug}'][0]`;
    const locationSoireeQuery = '*[_type == "locationSoiree"]'

    const locationSoiree = await client.fetch(query);
    const locationsSoiree = await client.fetch(locationSoireeQuery);

    return {
      props:{ locationsSoiree, locationSoiree }
    }
  }
export default locationSoireeDetails