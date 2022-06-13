import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <h2 className='open-time'>{heroBanner.midText} </h2>
  )
}

export default HeroBanner