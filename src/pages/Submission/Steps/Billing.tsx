import React, { useState, useCallback } from 'react'
import { Stack, Typography, Button, StepConnector, Box } from '@mui/material'

import { goNextStep, goPrevStep, dispatch } from '@/store'

export default function Billing() {
  
  const handleContinue = useCallback(() => {
    dispatch(goNextStep())
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])

  return (
    <Stack gap={'24px'}>

      <Stack gap={'4px'}>
        <Typography variant='subtitle1'>
          Payment Method
        </Typography>
        <Typography variant='body1' color='grey'>
          To pay with a credit or debit card, fill in your credit card number, expiration, CVC, country and zip/postal code. When complete, a PAY NOW button will appear beneath your payment method.

Alternatively, you may checkout with a 3rd party Wallet like Apple Pay or Google Pay, if given the option.

If you want to retain your credit or debit card information so future checkouts are easier, click the Save Card Details checkbox under the Country dropdown.
        </Typography>
      </Stack>

      <Stack direction='row' justifyContent={'space-between'}>
      <Button 
        color='secondary' 
        variant='contained' 
        sx={{padding: '10px 24px'}}
        onClick={handleBack}
      >
        <Typography variant='body2'>
          Back
        </Typography>
      </Button>

      <Button 
        color='primary' 
        variant='contained' 
        sx={{padding: '10px 24px'}}
        onClick={handleContinue}
      >
        <Typography variant='body2'>
          Continue
        </Typography>
      </Button>
    </Stack>

    </Stack>
  )
}
