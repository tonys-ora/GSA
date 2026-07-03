import { styled } from '@mui/material/styles';
import { Container, Paper, Stack } from '@mui/material'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { colors } from '@/theme';
import { steps } from '@/constants';
import { useCurrentStep } from '@/hooks/useCurrentStep';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: colors.red
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: colors.red
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.grey[800],
    }),
  },
}));

export default function Mystepper() {
  
  const currentStep = useCurrentStep()

  return (
    <Paper variant='outlined' sx={{borderRadius: 0, height: '80px'}}>
      <Container sx={{margin: '20px 50px'}}>
        <Stepper activeStep={currentStep} alternativeLabel connector={<ColorlibConnector />}>
          {steps.map((val) => (
            <Step key={val.id}>
              <StepLabel>{val.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Paper>
  )
}
 