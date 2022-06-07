import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';


const venteTraditionnelOccasionDetails = ({ venteTraditionnelOccasion, ventesTraditionnelOccasion }) => {
    const { image, name, details, price } = venteTraditionnelOccasion;
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
                    <h4>Details: </h4>
                    <p>{details}</p>
                 <p className="price">{price}DT</p>
                </div>
        </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "venteTraditionnelOccasion"] { 
        slug {
            current
        }
    }
    `;
    const ventesTraditionnelOccasion =await client.fetch(query);
    const paths = ventesTraditionnelOccasion.map((venteTraditionnelOccasion) => ({
        params:  {
            slug: venteTraditionnelOccasion.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "venteTraditionnelOccasion" && slug.current == '${slug}'][0]`;
    const venteTraditionnelOccasionQuery = '*[_type == "venteTraditionnelOccasion"]'

    const venteTraditionnelOccasion = await client.fetch(query);
    const ventesTraditionnelOccasion = await client.fetch(venteTraditionnelOccasionQuery);

    return {
      props:{ ventesTraditionnelOccasion, venteTraditionnelOccasion }
    }
  }
export default venteTraditionnelOccasionDetails