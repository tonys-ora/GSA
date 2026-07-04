import { 
  Card, 
  CardContent,
  CardActionArea, 
  Stack, 
  Typography,
  Radio
} from "@mui/material";

import { AddressType } from "@/types/Submission"
import { updateShippingAddress, dispatch } from '@/store'

const RadioAddress = ({
  address, detail, phone, checked
} : AddressType) => {
 return (
  <Card>
    <CardActionArea
      onClick={() => dispatch(updateShippingAddress({address: address}))}
      data-active={checked ? '' : undefined}
      sx={{
        height: '100%',
        padding: '12px 16px'
      }}
    >
      <CardContent sx={{ height: '100%'}}>
        <Stack direction='row' gap={'8px'}>
          <Stack gap={'2px'} flexGrow={1}>
            <Typography variant="subtitle2" sx={{color: checked? 'text.warning': 'text.primary'}} >{address}</Typography>
            <Typography variant="caption" sx={{color: checked? 'text.warning': 'text.secondary'}}>{detail} · {phone}</Typography>
          </Stack>
        
          <Radio checked={checked}/>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
 )
}

export default RadioAddress;