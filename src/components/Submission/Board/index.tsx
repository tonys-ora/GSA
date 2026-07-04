import styled from '@emotion/styled'
import {Box, Stack, Typography } from '@mui/material'

import { colors } from '@/theme'

const EmptyBox = styled(Stack)(({theme}) => ({
  border: `1px solid ${colors.borderGray}`,
  borderRadius: '16px',
  padding: '24px',
  height: '500px',
  alignItems: 'center',
  justifyContent: 'center',  
  gap: '24px'
}))

interface PropsType {
  title: string,
  content: string,
  imageUrl: string,
  alt: string
}

export default function index({
  title, content, imageUrl, alt
} : PropsType) {
  return (
    <Stack gap={'16px'} width={'100%'}>
      <Stack gap={'4px'}>
        <Typography variant='h6'>
          {title}
        </Typography>
        <Typography variant='body1' color='gray'>
          {content}
        </Typography>
      </Stack>
      <EmptyBox>
        <Box
          component='img'
          src={imageUrl}
          alt='empty card'
          sx={{ width: '110px', height: '80px'}}
          loading='eager'
          decoding='sync'
        />
        <Typography variant='body1' color='gray'>
          {alt}
        </Typography>
      </EmptyBox>
    </Stack>
  )
}
