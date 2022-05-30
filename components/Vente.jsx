import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Vente = ({ vente: { image, name, slug, price} }) => {
  return (
    <div>
      <Link href={`/vente/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])} 
          width={300}
          height={500}
          className="product-image" 
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price}DT</p>
        </div>
      </Link>
    </div>
  )
}

export default Vente