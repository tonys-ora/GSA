import { toast } from 'react-toastify'

import { MEDIA_URL } from '@/configs'

export * from './game'
export * from './number'
export * from './sports'

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const localStorageGetItem = (key: string, defaultValue = '') => {
  return localStorage.getItem(key) || defaultValue
}

export const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

export const hexToRgba = (hex: string, alpha: number = 100): string => {
  // Remove the '#' if present
  hex = hex.replace('#', '')

  // Extract red, green, blue
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Return in rgba format
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
}

/**
 * Handles errors gracefully
 * @param error - The error thrown by Axios or other sources
 * @param defaultMessage - Default error message if no specific error message is available
 */
export const handleError = (err: unknown, defaultMessage?: string) => {
  const message = err instanceof Error ? err.message : defaultMessage || 'An unknown error occurred'
  const toastOptions = { hideProgressBar: true, toastId: message }

  if (!toast.isActive(message)) {
    toast.error(message, toastOptions)
  } else {
    toast.update(message, { ...toastOptions, render: message })
  }
}

export const formatCapitalCaseName = (str: string) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
