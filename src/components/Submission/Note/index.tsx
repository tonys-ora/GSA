import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'

interface NoteType {
  title: string
  isEdit: boolean
}

export default function index({
  title,
  isEdit
  //  content
}: NoteType) {
  return (
    <Paper variant='outlined' sx={{ padding: '24px', width: '400px', borderRadius: '16px' }}>
      <Stack gap={'16px'}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='subtitle1'>{title}</Typography>
          {isEdit && (
            <Button aria-label='edit' variant='contained' color='info'>
              <DriveFileRenameOutlineOutlinedIcon sx={{ width: '18px', height: '18px' }} />
            </Button>
          )}
        </Stack>

        {[
          {
            title: 'Item type',
            value: 'Standard Card Grading'
          },
          {
            title: 'divider',
            value: ''
          }
        ].map(item =>
          item.title === 'divider' ? (
            <Divider />
          ) : (
            <Stack direction='row' justifyContent='space-between'>
              <Typography variant='subtitle2' color='grey'>
                {item.title}
              </Typography>
              <Typography variant='subtitle2'>{item.value}</Typography>
            </Stack>
          )
        )}
      </Stack>
    </Paper>
  )
}
