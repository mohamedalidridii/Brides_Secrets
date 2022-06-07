import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';


const venteSoireeNeufDetails = ({ venteSoireeNeuf, ventesSoireeNeuf }) => {
    const { image, name, details, price } = venteSoireeNeuf;
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
                 <p className="price">{price}DT</p>
                </div>
        </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "venteSoireeNeuf"] { 
        slug {
            current
        }
    }
    `;
    const ventesSoireeNeuf =await client.fetch(query);
    const paths = ventesSoireeNeuf.map((venteSoireeNeuf) => ({
        params:  {
            slug: venteSoireeNeuf.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "venteSoireeNeuf" && slug.current == '${slug}'][0]`;
    const venteSoireeNeufQuery = '*[_type == "venteSoireeNeuf"]'

    const venteSoireeNeuf = await client.fetch(query);
    const ventesSoireeNeuf = await client.fetch(venteSoireeNeufQuery);

    return {
      props:{ ventesSoireeNeuf, venteSoireeNeuf }
    }
  }
export default venteSoireeNeufDetails