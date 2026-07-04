import React, { useCallback } from 'react'
import { Link } from '@mui/material'
import { 
  Button, 
  Checkbox,
  Stack,
  Typography, 
  FormControlLabel
} from '@mui/material'

import { SearchBar } from '@/components/Core/SearchBar'
import { goNextStep, goPrevStep, dispatch } from '@/store'
import { useSummary } from '@/hooks'

export default function AddItems() {

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
        <Typography variant='h6'>
          Add Your Items
        </Typography>
        <Typography variant='body1' color='grey'>
          Add items you want to submit to GSA for grading
        </Typography>
      </Stack>

      <Stack gap={'8px'}>
        <SearchBar onSearch={() => {}} />
        <Typography variant='caption' color='grey'>
          Start with the player name and card number. 
          Then add any inserts and/or parallels, if applicable. 
          It doesn't matter if your card doesn't show up in the 
          search results. Simply enter the year, manufacturer, 
          card number, player name, insert and/or parallel to your ability.
            Then select the "Click Here To Add Your Card" link below. 
            Please note, during processing, SGC will correct any 
            inaccuracies so that all cards are labeled correctly.
        </Typography>
        <Link href='#'>
          <Typography variant='body2' sx={{fontSize: '12px', lineHeight: '18px', fontWeight: 500}} color='primary'>
            Show Pricing Table
          </Typography>
        </Link>
      </Stack>

      <FormControlLabel control={<Checkbox defaultChecked />} label="Encapsulate all if altered" />

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
          // disabled={!summary.cardAmount}
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
