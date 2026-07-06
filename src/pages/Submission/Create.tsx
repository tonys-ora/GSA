import { Container, Stack, Typography } from '@mui/material'

import StyledStepper from '@/components/Submission/StyledStepper'

import Summary from '@/components/Submission/Summary'
import { Submissions } from '@/constants'
import { useCurrentStep } from '@/hooks'

export default function CreateSubmission() {
  const currentStep = useCurrentStep()

  return (
    <Stack>
      <StyledStepper />
      <Container>
        {currentStep === 5 ? (
          Submissions[currentStep]
        ) : (
          <Stack direction='row' margin='24px 50px' gap='30px'>
            <Stack gap={'32px'} flexGrow={1}>
              <Typography variant='h5'>Create Submission</Typography>
              {Submissions[currentStep]}
            </Stack>

            <Stack>
              <Summary />
            </Stack>
          </Stack>
        )}
      </Container>
    </Stack>
  )
}
