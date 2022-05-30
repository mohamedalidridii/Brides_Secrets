import React, {useState} from 'react'
import { client, urlFor } from '../../lib/client';
import { Layout } from '../../components';


const venteDetails = ({ vente, ventes }) => {
    const { image, name, details, price } = vente;
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Sagittis nisl rhoncus mattis rhoncus. Massa sed elementum tempus egestas sed sed risus pretium quam.
                        Ac tortor vitae purus faucibus ornare. Ac tortor vitae purus faucibus ornare. Elementum curabitur vitae nunc sed. Viverra mauris in aliquam sem fringilla.
                        Odio ut enim blandit volutpat maecenas volutpat. Nunc aliquet bibendum enim facilisis gravida neque convallis a.
                        Morbi quis commodo odio aenean sed adipiscing diam. Id nibh tortor id aliquet lectus proin nibh. Cursus sit amet dictum sit amet.
                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Pharetra sit amet aliquam id diam maecenas ultricies.
                        Quisque sagittis purus sit amet volutpat consequat mauris nunc. Commodo ullamcorper a lacus vestibulum sed arcu non.
                        Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. 
                        Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Adipiscing elit ut aliquam purus.</p>
                 <p className="price">{price}DT</p>
                </div>
        </div>
    </Layout>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "vente"] { 
        slug {
            current
        }
    }
    `;
    const ventes =await client.fetch(query);
    const paths = ventes.map((vente) => ({
        params:  {
            slug: vente.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) =>{
    const query = `*[_type == "vente" && slug.current == '${slug}'][0]`;
    const venteQuery = '*[_type == "vente"]'

    const vente = await client.fetch(query);
    const ventes = await client.fetch(venteQuery);

    return {
      props:{ ventes, vente }
    }
  }
export default venteDetails