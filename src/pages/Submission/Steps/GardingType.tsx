import { Button, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'

import RadioItem from '@/components/Submission/GradingType/RadioItem'
import { itemTypes } from '@/constants'
import { useSummary } from '@/hooks'
import { dispatch, goNextStep } from '@/store'

export default function GardingType() {
  const summary = useSummary()

  const handleClick = useCallback(() => {
    dispatch(goNextStep())
  }, [])

  return (
    <Stack gap={'24px'}>
      <Stack gap={'4px'}>
        <Typography variant='h6'>Select Item Type</Typography>
        <Typography variant='body1' color='grey'>
          Select the item type that you are submitting to order
        </Typography>
      </Stack>

      <Stack gap={'8px'}>
        {itemTypes.map(value => (
          <RadioItem key={value.title} {...value} checked={value.title === summary.itemType} />
        ))}
      </Stack>

      <Stack direction='row-reverse'>
        <Button
          color='primary'
          variant='contained'
          sx={{ padding: '10px 24px' }}
          disabled={!summary.itemType}
          onClick={handleClick}
        >
          <Typography variant='body2'>Continue</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
