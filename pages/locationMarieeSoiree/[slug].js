import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';


const locationMarieeSoireeDetails = ({ locationMarieeSoiree, locationsMarieeSoiree }) => {
    const { image, name, details, price } = locationMarieeSoiree;
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
    const query = `*[_type == "locationMarieeSoiree"] { 
        slug {
            current
        }
    }
    `;
    const locationsMarieeSoiree =await client.fetch(query);
    const paths = locationsMarieeSoiree.map((locationMarieeSoiree) => ({
        params:  {
            slug: locationMarieeSoiree.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "locationMarieeSoiree" && slug.current == '${slug}'][0]`;
    const locationMarieeSoireeQuery = '*[_type == "locationMarieeSoiree"]'

    const locationMarieeSoiree = await client.fetch(query);
    const locationsMarieeSoiree = await client.fetch(locationMarieeSoireeQuery);

    return {
      props:{ locationsMarieeSoiree, locationMarieeSoiree }
    }
  }
export default locationMarieeSoireeDetails