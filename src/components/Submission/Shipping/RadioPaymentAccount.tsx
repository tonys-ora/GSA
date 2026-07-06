import { Card, CardActionArea, CardContent, Radio, Stack, TextField, Typography } from '@mui/material'

import { dispatch, updateShippingPaymentAccount } from '@/store'
import { PaymentAccountType } from '@/types/Submission'

const RadioPaymentAccount = ({ title, isInput, checked }: PaymentAccountType) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => dispatch(updateShippingPaymentAccount({ paymentAccount: title }))}
        data-active={checked ? '' : undefined}
        sx={{
          height: '100%',
          padding: '12px 16px'
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Stack direction='row' gap={'16px'} justifyContent={'space-between'}>
            <Typography variant='subtitle2' sx={{ color: checked ? 'text.warning' : 'text.primary' }} flexGrow={1}>
              {title}
            </Typography>
            {isInput && (
              <Stack
                sx={{
                  boxSizing: 'border-box',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '8px',
                  gap: '8px',
                  width: '202px',
                  height: '32px',
                  border: '1px solid #ECECEC',
                  borderRadius: '8px',
                  bgcolor: 'background.paper'
                }}
              >
                <TextField
                  placeholder='Input account number'
                  variant='standard'
                  InputProps={{
                    disableUnderline: true, // Removes the standard MUI bottom border
                    sx: {
                      width: '118px',
                      fontFamily: 'Manrope',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#797979',
                      '& input': {
                        padding: 0,
                        height: '16px'
                      }
                    }
                  }}
                />
              </Stack>
            )}
            <Radio checked={checked} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RadioPaymentAccount
