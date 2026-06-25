import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form'

import { AlertColor } from '@mui/material/Alert'
import { GridSize } from '@mui/material/Grid'
import { Breakpoint } from '@mui/material/styles'

// Define reusable type for form field types
export type FieldType = 'text' | 'select' | 'date' | 'file' | 'divider' | 'heading' | 'alert'

// Define responsive style values
export type ResponsiveStyleValue<T> = T | Array<T | null> | { [key in Breakpoint]?: T | null }

// Define base form field structure
export type Field<T> = {
  name?: keyof T
  label: string
  desc?: string
  color?: AlertColor
  type?: FieldType
  required?: boolean
  size?: ResponsiveStyleValue<GridSize>
  options?: Array<{ value: string; label: string }>
}

// Define form field props for React Hook Form
export type FormFieldProps<T extends FieldValues> = Omit<Field<T>, 'size'> & {
  control: Control<T>
  errors: FieldErrors<T>
  name?: Path<T> // Optional for 'divider' and 'heading'
}
