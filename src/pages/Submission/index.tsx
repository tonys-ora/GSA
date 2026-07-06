import AddIcon from '@mui/icons-material/Add'
import { Button, Container, Stack, Typography } from '@mui/material'

import StatusBoard from '@/components/Submission/Board'
import { submissionStatusBoards } from '@/constants'
import { useNavigate } from 'react-router-dom'

export default function Submission() {
  const navigate = useNavigate()

  return (
    <Container>
      <Stack padding={'50px'} gap={'32px'}>
        <Stack direction='row'>
          <Typography variant='h5' flexGrow={1}>
            My Submission
          </Typography>
          <Button
            color='primary'
            variant='contained'
            sx={{ padding: '10px 16px' }}
            startIcon={<AddIcon />}
            onClick={() => navigate('/submission/new')}
          >
            <Typography variant='body2'>Create New Submission</Typography>
          </Button>
        </Stack>

        <Stack direction='row' gap={'50px'}>
          {submissionStatusBoards.map(item => (
            <StatusBoard key={item.title} {...item} />
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
