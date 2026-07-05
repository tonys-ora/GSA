import { useSummary } from '@/hooks'
import {Button, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

import { SummaryConst } from '@/constants'

export default function index() {
  const summary = useSummary()

  return (
    <Paper variant='outlined' sx={{padding: '24px', width:'400px', borderRadius: '16px'}}>
      <Stack gap={'16px'}>
        <Typography variant='h6'>Summary</Typography>

          <Stack gap='12px'>
          {
            Object.entries(summary).slice(1, 6).map((val) => (
              val[1] !== null ? 
              <Stack key={val[0]} direction='row' justifyContent='space-between'>
                <Typography variant='subtitle2' color='grey'>{SummaryConst[val[0] as keyof typeof SummaryConst].title}</Typography>
                <Typography variant='subtitle2'>{SummaryConst[val[0] as keyof typeof SummaryConst].prefix+val[1]}</Typography>
              </Stack>
              : null
            ))
          }
          </Stack>
        
        { summary.showDiv1 && <Divider /> }
        { summary.showDiv1 && 
          <Stack gap='12px'>
            <Typography variant='subtitle1'>Shipping & Billing</Typography>
            {
              Object.entries(summary).slice(6, 9).map((val) => (
                val[1] !== null ? 
                <Stack key={val[0]} direction='row' justifyContent='space-between'>
                  <Typography variant='subtitle2' color='grey'>{SummaryConst[val[0] as keyof typeof SummaryConst].title}</Typography>
                  <Typography variant='subtitle2'>{SummaryConst[val[0] as keyof typeof SummaryConst].prefix+val[1]}</Typography>
                </Stack>
                : null
              ))
            }
          </Stack>
        }
        
        { summary.showDiv2 && <Divider />}
        { summary.showDiv2 && 
          <Stack direction='row' gap='8px'>
            <TextField
              placeholder="Add Promotion Code"
              variant="outlined"
              sx={{
                height: '40px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexGrow: 1,
                order: 0,

                '& .MuiOutlinedInput-root': {
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#F1F1F1',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  gap: '8px',
                  
                  '& fieldset': {
                    borderColor: '#ECECEC',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ECECEC',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ECECEC',
                  },
                },

                '& .MuiInputBase-input': {
                  fontFamily: 'Manrope, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#797979',
                  padding: 0,
                  '&::placeholder': {
                    color: '#797979',
                    opacity: 1,
                  },
                },
              }}
            />
            <Button variant='contained' color='error'>
              <Typography variant='body1'>Apply</Typography>
            </Button>
          </Stack>
        }
        { summary.showDiv2 && <Divider />}

        { summary.showDiv2 && 
          
          <Stack gap='12px'>
            {[
              {
                title: 'Subtotal', value: '$'+summary.totalValue
              },
              {
                title: 'Grading fee', value: '$'+summary.gradingFee
              },
              {
                title: 'Insured Return Shipping', value: '$'+summary.shippingCost
              },
              {
                title: 'Handling Charge', value: '$0.00'
              }].map((val) => (
              <Stack key={val.title} direction='row' justifyContent='space-between'>
                <Typography variant='subtitle2' color='grey'>{val.title}</Typography>
                <Typography variant='subtitle2'>{val.value}</Typography>
              </Stack>
            ))}
            <Divider />
            <Stack direction='row' justifyContent='space-between'>
              <Typography variant='subtitle2' color='grey'>Estimated Total</Typography>
              <Typography variant='subtitle2'>
                ${(summary.totalValue ?? 0)+(summary.gradingFee ?? 0)+(summary.shippingCost ?? 0)}
              </Typography>
            </Stack>
          </Stack>

        }

      </Stack>
    </Paper>
  )
}
