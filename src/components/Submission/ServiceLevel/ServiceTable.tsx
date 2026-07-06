import { Box, Stack, styled, Typography } from '@mui/material'

import { Services } from '@/constants'
import { useSummary } from '@/hooks'

import RadioService from './RadioService'

const HeaderText = styled(Typography)({
  WebkitBackgroundClip: 'text',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '20px',
  color: '#797979',
  alignContent: 'center'
})

export function ServiceTable() {
  const summary = useSummary()

  console.log(summary)

  return (
    <Stack
      sx={{
        gap: '8px'
      }}
    >
      <Stack
        direction={'row'}
        sx={{
          bgcolor: '#F3F3F3',
          padding: '0 16px 0 32px',
          borderRadius: '16px',
          justifyContent: 'space-between',
          gap: '8px'
        }}
      >
        <Box flexGrow={1} textAlign={'center'}>
          <HeaderText>Service Level</HeaderText>
        </Box>
        <Box width={100} textAlign={'center'}>
          <HeaderText>Min cards/sub</HeaderText>
        </Box>
        <Box width={100} textAlign={'center'}>
          <HeaderText>Turnaround</HeaderText>
        </Box>
        <Box width={60} textAlign={'center'}>
          <HeaderText>Price</HeaderText>
        </Box>
      </Stack>

      {Services.map(val => (
        <RadioService key={val.level} {...val} checked={val.level === summary.gradingService} />
      ))}
      <Typography variant='body1' color='gray' component='span'>
        Join{' '}
        <Box component='span' color='#E24744'>
          membership & points program
        </Box>{' '}
        for more benefits
      </Typography>
    </Stack>
  )
}
