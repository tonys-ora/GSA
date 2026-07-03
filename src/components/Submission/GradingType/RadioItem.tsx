import { 
  Card, 
  CardContent,
  CardActionArea, 
  Stack, 
  Typography,
  Radio
} from "@mui/material";

import AppIcon from "@/components/Core/AppIcon"
import { RadioItemType } from "@/types/Submission/GradingType"
import { updateItemType, dispatch } from '@/store'


const RadioItem = ({
  title, content, icon, checked
} : RadioItemType) => {
 return (
  <Card>
    <CardActionArea
      onClick={() => dispatch(updateItemType({itemType: title}))}
      data-active={checked ? '' : undefined}
      sx={{
        height: '100%',
        padding: '12px 16px 12px 8px'
      }}
    >
      <CardContent sx={{ height: '100%'}}>
        <Stack direction='row' gap={'8px'}>
          <Stack sx={{height: '36px', width:'36px', justifyContent: 'center', alignItems: 'center'}}>
            <AppIcon name={icon}/>
          </Stack>

          <Stack gap={'2px'} flexGrow={1}>
            <Typography variant="subtitle2" sx={{color: checked? 'text.warning': 'text.primary'}} >{title}</Typography>
            <Typography variant="caption" sx={{color: checked? 'text.warning': 'text.secondary'}}>{content}</Typography>
          </Stack>
        
          <Radio checked={checked}/>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
 )
}

export default RadioItem;