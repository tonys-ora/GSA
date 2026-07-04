import React, { useState, useCallback } from 'react'
import { alpha, styled } from '@mui/material/styles';
import { Stack, Typography, Button, Checkbox, Autocomplete, FormControlLabel} from '@mui/material'
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

import { goNextStep, goPrevStep, dispatch } from '@/store'
import { countries } from '@/constants'

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    slotProps={{
      input: { disableUnderline: true } as Partial<OutlinedInputProps>,
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: '8px',
    border: '1px solid',
    backgroundColor: '#F3F6F9',
    borderColor: '#E0E3E7',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#2D3843',
    }),
  },
}));

export default function Billing() {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  
  const handleContinue = useCallback(() => {
    dispatch(goNextStep())
  }, [])
  const handleBack = useCallback(() => {
    dispatch(goPrevStep())
  }, [])

  return (
    <Stack gap={'24px'}>

      <Stack gap={'4px'}>
        <Typography variant='h6'>
          Payment Method
        </Typography>
        <Typography variant='body1' color='grey'>
          To pay with a credit or debit card, fill in your credit card number, expiration, CVC, country and 
          zip/postal code. When complete, a PAY NOW button will appear beneath your payment method.
        </Typography>
        <Typography />
        <Typography variant='body1' color='grey'>
          Alternatively, you may checkout with a 3rd party Wallet like Apple Pay or Google Pay, if given the option.
        </Typography>
        <Typography />
        <Typography variant='body1' color='grey'>
          If you want to retain your credit or debit card information so future checkouts are easier, click the Save Card Details checkbox under the Country dropdown.
        </Typography>
      </Stack>

      {/* inputs */}
      <Stack gap='8px'>
        <RedditTextField 
          label="Card number"
          variant='filled'
          />
        <Stack direction='row' gap={'8px'}>
          <RedditTextField 
            label="Expiry"
            variant='filled'
            sx={{flex : 1}}
          />
          <RedditTextField 
            label="Security Code"
            type="password"
            variant='filled'
            sx={{flex : 1}}
          />
        </Stack>

         <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          inputValue={inputValue}
          id="controllable-states-demo"
          options={countries}
          renderInput={(params) => <TextField {...params} label="Controllable" />}
        />
        
        <FormControlLabel control={<Checkbox />} label="Save payment method" />
        
      </Stack>


      {/* buttons */}
      <Stack direction='row' justifyContent={'space-between'}>
        <Button 
          color='secondary' 
          variant='contained' 
          sx={{padding: '10px 24px'}}
          onClick={handleBack}
        >
          <Typography variant='body2'>
            Back
          </Typography>
        </Button>

        <Button 
          color='primary' 
          variant='contained' 
          sx={{padding: '10px 24px'}}
          onClick={handleContinue}
        >
          <Typography variant='body2'>
            Review Order
          </Typography>
        </Button>
      </Stack>

    </Stack>
  )
}
