import { styled } from '@mui/material/styles'

import { colors } from '@/theme'

export const HeaderContainer = styled('header', {
  shouldForwardProp: prop => prop !== 'sideWidth'
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  zIndex: 100,
  transition: 'background 0.3s ease-in-out, right 0.3s ease-in-out, width 0.3s ease-in-out',
  background: colors.bgLight,
  borderBottom: `1px solid ${colors.border}`,
  width: '100%',
  
  [theme.breakpoints.up('sm')]: {
    maxWidth: '100%',
  },

  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
  },

  ...theme.applyStyles('dark', {
    background: colors.bgDark,
    borderBottom: `1px solid ${colors.borderDark}`
  })
}))
