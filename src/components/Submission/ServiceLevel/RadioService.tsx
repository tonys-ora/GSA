import { Box, Card, CardActionArea, CardContent, Radio, Stack, Typography } from '@mui/material'

import { dispatch, updateService } from '@/store'
import { ServiceType } from '@/types/Submission'

const RadioService = ({ level, content, minCards, turnaround, price, checked }: ServiceType) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => dispatch(updateService({ serviceLevel: level, gradingFee: 65 }))}
        data-active={checked ? '' : undefined}
        sx={{
          height: '100%',
          padding: '12px 16px'
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Stack direction='row' gap={'8px'} justifyContent={'space-between'}>
            <Radio checked={checked} sx={{ paddingRight: '8px' }} size='medium' />

            <Stack gap={'2px'} flexGrow={1}>
              <Typography variant='subtitle2' sx={{ color: checked ? 'text.warning' : 'text.primary' }}>
                {level}
              </Typography>
              <Typography variant='caption' sx={{ color: checked ? 'text.warning' : 'text.secondary' }}>
                {content}
              </Typography>
            </Stack>

            <Box minWidth={'100px'} textAlign={'center'}>
              <Typography variant='body1' sx={{ color: checked ? 'text.warning' : 'text.primary' }}>
                {minCards < 0 ? 'No minimum' : `${minCards} cards`}{' '}
              </Typography>
            </Box>
            <Box minWidth={'100px'} textAlign={'center'}>
              <Typography variant='body1' sx={{ color: checked ? 'text.warning' : 'text.primary' }}>
                {turnaround.min}
                {turnaround.min !== turnaround.max && '-' + turnaround.max} Business
              </Typography>
            </Box>
            <Box minWidth={'60px'} textAlign={'center'}>
              <Typography variant='body1' sx={{ color: checked ? 'text.warning' : 'text.primary' }}>
                ${price}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RadioService
