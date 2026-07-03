import { memo, useMemo } from 'react'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import useTheme from '@mui/material/styles/useTheme'

import { useDeviceType } from '@/hooks'

const Logo = ({ fullWidth }: { fullWidth?: boolean }) => {
  const theme = useTheme()
  const { isTablet } = useDeviceType()

  const logoProps = useMemo(() => {
    if (fullWidth || !isTablet) {
      return {
        src: '/logo.png',
        width: '71px',
        height: '20px',
        alt: 'Company Logo'
      }
    }

    return {
      src: '/logo.png',
      width: '71px',
      height: '20px',
      alt: 'Mobile Company Logo'
    }
  }, [isTablet, theme.palette.mode, fullWidth])

  return (
    <Stack component={Link} href='/' aria-label='Home page'>
      <Box
        component='img'
        src={logoProps.src}
        alt={logoProps.alt}
        sx={{ width: logoProps.width, height: logoProps.height }}
        loading='eager'
        decoding='sync'
      />
    </Stack>
  )
}

export default memo(Logo)
