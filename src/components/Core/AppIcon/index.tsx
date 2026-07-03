import { FC, memo } from 'react'

import Stack from '@mui/material/Stack'

import Award4 from '@/assets/icons/Award4.svg'
import { colors } from '@/theme'

export const ICONS_MAP = {
  award4: Award4
}

export type IconType = keyof typeof ICONS_MAP

export type IconColor = keyof typeof colors

interface AppIconProps {
  name: IconType
  size?: number
  color?: IconColor
}

const AppIcon: FC<AppIconProps> = ({ name, size = 20, color, ...props }) => {
  const IconComponent = ICONS_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className='app-icon'
      component='span'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color && colors[color],
        '& svg': {
          width: size,
          height: size
        }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}

export default memo(AppIcon)
