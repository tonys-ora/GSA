import { Stack, Typography } from '@mui/material'

import { shippingMethods } from '@/constants'
import { useSummary } from '@/hooks'

import RadioMethod from './RadioMethod'

export default function ShippingMethods() {
  const summary = useSummary()

  return (
    <Stack gap={'16px'}>
      <Typography variant='subtitle1'>Select Shipping Method</Typography>
      <Stack gap={'8px'} direction='row'>
        {shippingMethods.map(val => (
          <RadioMethod key={val.method} {...val} checked={summary.shippingMethod === val.method} />
        ))}
      </Stack>
    </Stack>
  )
}
