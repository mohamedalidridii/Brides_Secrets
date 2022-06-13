
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import venteTraditionnelOccasion from './venteTraditionnelOccasion'
import venteTraditionnelNeuf from './venteTraditionnelNeuf'
import venteSoireeOcasion from './venteSoireeOcasion'
import venteSoireeNeuf from './venteSoireeNeuf'
import locationInviteeVoileeTraditionnel from './locationInviteeVoileeTraditionnel'
import locationInviteeVoileeSoiree from './locationInviteeVoileeSoiree'
import locationInviteeNonVoileeSoiree from './locationInviteeNonVoileeSoiree'
import locationInviteeNonVoileeTraditionnel from './locationInviteeNonVoileeTraditionnel'
import locationMarieetraditionnel from './locationMarieetraditionnel'
import locationMarieeSoiree from './locationMarieeSoiree'
import banner from './banner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    banner,
    venteTraditionnelOccasion, venteTraditionnelNeuf, 
    venteSoireeOcasion, venteSoireeNeuf, 
    locationInviteeVoileeSoiree, locationInviteeVoileeTraditionnel, locationInviteeNonVoileeSoiree, locationInviteeNonVoileeTraditionnel,
     locationMarieetraditionnel, locationMarieeSoiree
    
  ]),
})
