import React, { useCallback } from 'react'
import { Stack, Typography, Button} from '@mui/material'

import { ServiceTable } from '@/components/Submission/ServiceLevel'
import { goNextStep, goPrevStep, dispatch } from '@/store'
import { useSummary } from '@/hooks'

export default function ServiceLevel() {
  
  const handleContinue = useCallback(() => {
    dispatch(goNextStep())
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])

  return (
    <Stack gap={'40px'}>
      <Stack gap={'24px'}>

        <Stack gap={'4px'}>
          <Typography variant='h6'>
            Select Service Program
          </Typography>
          <Typography variant='body1' color='grey'>
            Select the service you want to take
          </Typography>
        </Stack>
        
        <ServiceTable />

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
          disabled={!useSummary().gradingService}
        >
          <Typography variant='body2'>
            Continue
          </Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
