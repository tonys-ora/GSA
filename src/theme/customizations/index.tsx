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
      root: ({theme}) => ({
        maxWidth: '1140px',
        padding: '16px 0px !important'
      })
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in',
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({theme}) => ({
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
        variants: [
          {
            props: {
              color: 'primary',
              variant: 'contained'
            },
            style: {
              color: colors.white,
              padding: '12px 24px',
              backgroundColor: colors.red
            }
          },
          {
            props: {
              color: 'secondary',
              variant: 'contained'
            },
            style: {
              color: colors.dark,
              backgroundColor: colors.white,
              border: `1px solid ${colors.border}`,
              padding: '10px 24px'
            }
          },
          {
            props: {
              color: 'inherit',
              variant: 'contained'
            },
            style: {
              color: colors.dark,
              backgroundColor: colors.grey,
              padding: '10px 16px'
            }
          }
        ]
      })
    }
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        borderRadius: '16px'
      }
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: { color: 'grey' },
            style: {
              color: `${colors.greyDark} !important`,
              ...theme.applyStyles('dark', {
                color: `${colors.greyLight} !important`
              })
            }
          },
          {
            props: { color: 'grey-dark' },
            style: {
              color: `${colors.greyDark} !important`
            }
          },
          {
            props: { color: 'red' },
            style: {
              color: `${colors.red} !important`
            }
          },
          {
            props: { color: 'default' },
            style: {
              color: `${colors.dark} !important`,
              ...theme.applyStyles('dark', {
                color: `${colors.white} !important`
              })
            }
          },
          {
            props: { color: 'prime' },
            style: {
              color: `${colors.prime} !important`
            }
          }
        ]
      })
    }
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          // padding: 16,
          gap: 16,
          transition: 'all 100ms ease',
          backgroundColor: colors.white,
          borderRadius: theme.shape.borderRadius,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none',
          ...theme.applyStyles('dark', {
            backgroundColor: colors.layer1Dark
          }),
          variants: [
            {
              props: {
                variant: 'outlined'
              },
              style: {
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                background: colors.white,
                ...theme.applyStyles('dark', {
                  background: alpha(gray[900], 0.4)
                })
              }
            }
          ]
        }
      }
    }
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 0,
        '&:last-child': { paddingBottom: 0 }
      }
    }
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 0
      }
    }
  },
  MuiCardActionArea: {
    styleOverrides: {
      root: {
        '&[data-active]': {
          backgroundColor: '#E2474414',
          border: `1px solid ${colors.red}`,
          '&:hover': {
            backgroundColor: '#E2474414',
          },
        }
      }
    }
  }
}
