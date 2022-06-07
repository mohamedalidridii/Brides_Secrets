
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import venteTraditionnelOccasion from './venteTraditionnelOccasion'
import venteTraditionnelNeuf from './venteTraditionnelNeuf'
import venteSoireeOcasion from './venteSoireeOcasion'
import venteSoireeNeuf from './venteSoireeNeuf'
import locationSoiree from './locationSoiree'
import locationMariage from './locationMariage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    venteTraditionnelOccasion, venteTraditionnelNeuf, venteSoireeOcasion, venteSoireeNeuf, locationSoiree, locationMariage
    
  ]),
})
