import { Stack, Typography } from '@mui/material'

import { shippingPaymentAccounts } from '@/constants'
import { useSummary } from '@/hooks'

import RadioPaymentAccount from './RadioPaymentAccount'

export default function shippingPaymentAccount() {
  const summary = useSummary()

  return (
    <Stack gap={'16px'}>
      <Typography variant='subtitle1'>Select Shipping Payment Account</Typography>
      <Stack gap={'8px'}>
        {shippingPaymentAccounts.map(val => (
          <RadioPaymentAccount key={val.title} {...val} checked={summary.shippingPaymentAccount === val.title} />
        ))}
      </Stack>
    </Stack>
  )
}
