import {Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export default function index() {
  return (
    <Paper variant='outlined' sx={{padding: '24px', width:'400px', borderRadius: '16px'}}>
      <Stack gap={'16px'}>
        <Typography variant='subtitle1'>Summary</Typography>

        <Stack direction='row'>
          <Typography variant='subtitle2' color='grey' flexGrow={1}>Item type</Typography>
          <Typography variant='subtitle2' >StandardCardGarding</Typography>
        </Stack>

      </Stack>
    </Paper>
  )
}
