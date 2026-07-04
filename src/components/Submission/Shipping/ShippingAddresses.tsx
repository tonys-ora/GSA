import React from 'react'
import { Button, Stack, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import { shippingAddresses } from '@/constants'
import RadioAddress from './RadioAddress'
import { useSummary } from '@/hooks'

export default function ShippingAddresses() {
  const summary = useSummary()

  return (
    <Stack gap={'16px'}>
      <Typography variant='subtitle1'>Select Shipping Address</Typography>
      <Stack gap={'8px'}>
        {
          shippingAddresses.map((val) => (
            <RadioAddress key={val.address} {...val} checked={val.address === summary.shippingAddress} />
          ))
        }
        <Button 
          variant='contained' 
          sx={{bgcolor: '#F1F1F1', color: 'black', borderRadius: '8px'}}
          startIcon={<AddIcon />}
        >
          <Typography variant='body1' lineHeight='20px'>
            Add new shipping address
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
