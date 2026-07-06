import { Button, Divider, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'

import ShippingAddresses from '@/components/Submission/Shipping/ShippingAddresses'
import ShippingMethods from '@/components/Submission/Shipping/ShippingMethods'
import ShippingPaymentAccount from '@/components/Submission/Shipping/ShippingPaymentAccount'
import { useSummary } from '@/hooks'
import { dispatch, goNextStep, goPrevStep } from '@/store'

export default function Shipping() {
  const summary = useSummary()

  const handleContinue = useCallback(() => {
    dispatch(goNextStep())
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])

  return (
    <Stack gap={'24px'}>
      <Stack gap={'4px'}>
        <Typography variant='h6'>Return Shipping</Typography>
        <Typography variant='body1' color='grey'>
          Complete your submission by providing shipment
        </Typography>
      </Stack>

      {/* section1 */}
      <ShippingAddresses />
      <Divider />
      <ShippingMethods />
      <Divider />
      <ShippingPaymentAccount />

      {/* buttons */}
      <Stack direction='row' justifyContent={'space-between'}>
        <Button color='secondary' variant='contained' sx={{ padding: '10px 24px' }} onClick={handleBack}>
          <Typography variant='body2'>Back</Typography>
        </Button>

        <Button
          color='primary'
          variant='contained'
          sx={{ padding: '10px 24px' }}
          onClick={handleContinue}
          disabled={!summary.shippingAddress || !summary.shippingMethod || !summary.shippingPaymentAccount}
        >
          <Typography variant='body2'>Proceed to Checkout</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
