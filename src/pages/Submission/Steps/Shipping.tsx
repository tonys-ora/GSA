import React, { useState, useCallback } from 'react'
import { Stack, Typography, Button, StepConnector, Box } from '@mui/material'

import { goNextStep, goPrevStep, dispatch } from '@/store'

export default function Shipping() {
  
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
          Return Shipping
        </Typography>
        <Typography variant='body1' color='grey'>
          Complete your submission by providing shipment
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
