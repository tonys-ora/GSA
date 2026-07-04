import { useSummary } from '@/hooks'
import {Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export default function index() {
  const summary = useSummary()

  return (
    <Paper variant='outlined' sx={{padding: '24px', width:'400px', borderRadius: '16px'}}>
      <Stack gap={'16px'}>
        <Typography variant='h6'>Summary</Typography>

          {
            Object.entries(summary)
          }
          <Stack gap='12px'>
          {/* {
            Object.entries(summary).slice(1, 5).map((val, index) => (
              {val[1] ? val[1] : <></>}
            ))
            } */}
          </Stack>
        
        

      </Stack>
    </Paper>
  )
}
