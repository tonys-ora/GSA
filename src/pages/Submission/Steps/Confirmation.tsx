import React, { useState, useCallback} from 'react'
import { Stack, Typography, Button, StepConnector, Box, Card } from '@mui/material'

import { goNextStep, goPrevStep, dispatch } from '@/store'
import Note from '@/components/Submission/Note'
import { useSummary } from '@/hooks'
import { SummaryConst } from '@/constants'

export default function Confirmation() {
  
  const summary = useSummary()

  const handleContinue = useCallback(() => {
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])


  return (
    <Stack gap={'24px'}>

      <Typography variant='h5' display={'flex'} justifyContent={'center'}>Review Order</Typography>

      {/* first Section */}
      <Stack direction='row' gap='24px'>
        <Stack flexGrow={1}></Stack>
        
        <Stack gap='16px'>
          {[
            {
              title: 'Grading Details',
              isEdit: true,
              content: Object.entries(summary).slice(1, 6).map((val) => ({title: SummaryConst[val[0] as keyof typeof SummaryConst].title, value: SummaryConst[val[0] as keyof typeof SummaryConst].prefix+val[1]}))
            },
            {
              title: 'Shipping & Billing',
              isEdit: true,
              content: Object.entries(summary).slice(6, 9).map((val) => ({title: SummaryConst[val[0] as keyof typeof SummaryConst].title, value: SummaryConst[val[0] as keyof typeof SummaryConst].prefix+val[1]}))
            },
            {
              title: 'Checkout Summary',
              isEdit: false,
              
            }
          ].map((value) => (
            <Note key={value.title} {...value}/>
          ))}
        </Stack>
      </Stack>

      {/* buttons */}
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
