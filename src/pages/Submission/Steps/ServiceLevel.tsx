import { Button, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'

import { ServiceTable } from '@/components/Submission/ServiceLevel'
import { useSummary } from '@/hooks'
import { dispatch, goNextStep, goPrevStep, showSummary } from '@/store'

export default function ServiceLevel() {
  const handleContinue = useCallback(() => {
    dispatch(showSummary())
    dispatch(goNextStep())
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])

  return (
    <Stack gap={'40px'}>
      <Stack gap={'24px'}>
        <Stack gap={'4px'}>
          <Typography variant='h6'>Select Service Program</Typography>
          <Typography variant='body1' color='grey'>
            Select the service you want to take
          </Typography>
        </Stack>

        <ServiceTable />
      </Stack>

      <Stack direction='row' justifyContent={'space-between'}>
        <Button color='secondary' variant='contained' sx={{ padding: '10px 24px' }} onClick={handleBack}>
          <Typography variant='body2'>Back</Typography>
        </Button>

        <Button
          color='primary'
          variant='contained'
          sx={{ padding: '10px 24px' }}
          onClick={handleContinue}
          disabled={!useSummary().gradingService}
        >
          <Typography variant='body2'>Continue</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
