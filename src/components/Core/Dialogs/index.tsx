import { ComponentType, FC, memo, useMemo } from 'react'

import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'

import { useDialog } from '@/hooks'

import Auth from '@/views/Auth'
import ForgotPassword from '@/views/Auth/ForgotPassword'
import ResetPassword from '@/views/Auth/ResetPassword'
import Terms from '@/views/Auth/Terms'
import TwoFA from '@/views/Auth/TwoFA'
import Vault from '@/views/Profile/Vault'
import Vip from '@/views/Profile/Vip'
import Wallet from '@/views/Profile/Wallet'

// Strongly type the dialog names
const DIALOG_NAMES = {
  AUTH: 'auth',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  TERMS: 'terms',
  WALLET: 'wallet',
  VIP: 'vip',
  TWO_FA: '2fa',
  VAULT: 'vault'
} as const

type DialogName = keyof typeof DIALOG_NAMES
type DialogType = (typeof DIALOG_NAMES)[DialogName]

// Map dialog names to their corresponding components
const DIALOG_COMPONENTS: Record<DialogType, ComponentType> = {
  [DIALOG_NAMES.AUTH]: Auth,
  [DIALOG_NAMES.FORGOT_PASSWORD]: ForgotPassword,
  [DIALOG_NAMES.RESET_PASSWORD]: ResetPassword,
  [DIALOG_NAMES.TERMS]: Terms,
  [DIALOG_NAMES.VAULT]: Vault,
  [DIALOG_NAMES.VIP]: Vip,
  [DIALOG_NAMES.TWO_FA]: TwoFA,
  [DIALOG_NAMES.WALLET]: Wallet
}

const DialogsComponent: FC = () => {
  const theme = useTheme()
  const { activeDialog, closeDialog } = useDialog()

  // Memoize the dialog component to prevent unnecessary re-renders
  const DialogComponent = useMemo(
    () => (activeDialog ? DIALOG_COMPONENTS[activeDialog as DialogType] : null),
    [activeDialog]
  )

  const paperStyles = useMemo(
    () => ({
      minWidth: '20rem',
      backgroundImage: 'none',
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[10]
    }),
    [theme]
  )

  return (
    <Dialog
      open={!!activeDialog}
      onClose={closeDialog}
      PaperProps={{ sx: paperStyles }}
      maxWidth='sm'
      aria-labelledby='dialog-title'
    >
      {DialogComponent && <DialogComponent />}
    </Dialog>
  )
}

export default memo(DialogsComponent)
