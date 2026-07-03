import SimpleBar from 'simplebar-react'

import { styled } from '@mui/material/styles'

interface MainContentProps {
  isMobile: boolean
}

export const MainContent = styled(SimpleBar, {
  shouldForwardProp: prop => prop !== 'isMobile'
})<MainContentProps>(({ theme, isMobile }) => ({
  flexGrow: 1,
  overflowX: 'hidden',
  width: '100%',
  marginTop: '72px',
  height: 'calc(100vh - 72px - 51px)',
  marginBottom: isMobile ? theme.spacing(7) : '51px',

  // [theme.breakpoints.up('md')]: {
  //   marginTop: '83px',
  //   height: 'calc(100vh - 83px)'
  // }
}))
