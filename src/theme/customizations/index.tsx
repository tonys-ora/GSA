import { chipClasses } from '@mui/material/Chip'
import { dividerClasses } from '@mui/material/Divider'
import { iconButtonClasses } from '@mui/material/IconButton'
import { menuItemClasses } from '@mui/material/MenuItem'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import { selectClasses } from '@mui/material/Select'
import { svgIconClasses } from '@mui/material/SvgIcon'
import { tabClasses } from '@mui/material/Tab'
import { toggleButtonClasses } from '@mui/material/ToggleButton'
import { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup'
import { Components, Theme, alpha } from '@mui/material/styles'

import { hexToRgba } from '@/utils'

import AppIcon from '@/components/Core/AppIcon'

import { brand, colors, gray, red } from '../themePrimitives'

export const customizations: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
        root: {
            maxWidth: '1140px',
            paddingTop: '16px',
            paddingBottom: '16px'
        }
    }
  }
}
