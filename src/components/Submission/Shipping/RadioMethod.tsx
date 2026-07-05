import { 
  Card, 
  CardContent,
  CardActionArea, 
  Stack, 
  Typography,
  Radio,
  Box
} from "@mui/material";

import { MethodType } from "@/types/Submission"
import { updateShippingMethod, dispatch } from '@/store'

const RadioMethod = ({
  url, method, price, checked
} : MethodType) => {
 return (
  <Card sx={{width: '100%'}}>
    <CardActionArea
      onClick={() => dispatch(updateShippingMethod({method: method, price: price}))}
      data-active={checked ? '' : undefined}
      sx={{
        height: '100%',
        padding: '12px 16px'
      }}
    >
      <CardContent sx={{ height: '100%'}}>
        <Stack gap={'8px'}>
          <Stack direction='row' justifyContent='space-between'>
            <Box 
              component='img'
              src={url}
              sx={{minWidth: '46.21px', minHeight: '32px'}}
            />
            <Radio checked={checked}/>
          </Stack>
          <Stack gap={'2px'} direction='row'>
            <Typography variant="subtitle2" sx={{color: checked? 'text.warning': 'text.primary'}} flexGrow={1}>{method}</Typography>
            <Typography variant="subtitle2" sx={{color: checked? 'text.warning': 'text.primary'}}>${price}</Typography>
          </Stack>
        
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
 )
}

export default RadioMethod;