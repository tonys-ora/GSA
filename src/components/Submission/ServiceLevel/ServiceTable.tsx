import React from 'react'
import { styled, Stack, Typography } from '@mui/material';

import { serviceTableHeader } from '@/constants';

const HeaderText = styled(Typography)({
  WebkitBackgroundClip: 'text',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '20px',
  color: 'secondary'
});

export function ServiceTable() {
  return (
    <Stack 
      sx={{
        gap: '8px'
      }}
      >
      <Stack direction={'row'}
        sx={{
          bgcolor: '#F3F3F3',
          padding: '0 16px 0 32px',
          borderRadius: '16px',
          justifyContent: 'space-between',
          gap: '8px'
        }}
        >
        {
          serviceTableHeader.map((val) => (
            <HeaderText>{val.title}</HeaderText>
          ))
         }
      </Stack>
    </Stack>
  )
}
