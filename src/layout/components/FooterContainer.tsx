import { styled } from '@mui/material/styles'

import { colors } from '@/theme'

export const FooterContainer = styled('footer', {
  shouldForwardProp: prop => prop !== 'sideWidth'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  zIndex: 100,
  transition: 'background 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out',
  background: colors.white,
  width: '100%',
  bottom: 0,

  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%'
  },

  [theme.breakpoints.up('md')]: {
    maxWidth: '100%'
  },

  ...theme.applyStyles('dark', {
    background: colors.bgDark
  })
}))
