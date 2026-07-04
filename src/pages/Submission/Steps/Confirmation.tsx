import React, { useState, useCallback} from 'react'
import { Stack, Typography, Button, StepConnector, Box } from '@mui/material'

import { goNextStep, goPrevStep, dispatch } from '@/store'

export default function Confirmation() {
  
  const handleContinue = useCallback(() => {
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])


  return (
    <Stack gap={'24px'}>

      <Stack gap={'4px'}>
        <Typography variant='h6'>
          Add Your Items
        </Typography>
        <Typography variant='body1' color='grey'>
          Add items you want to submit to GSA for grading
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
      >
        <Typography variant='body2'>
          Confirm Order
        </Typography>
      </Button>
    </Stack>
      

    </Stack>
  )
}
