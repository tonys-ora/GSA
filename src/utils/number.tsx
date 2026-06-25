import { NumericFormat } from 'react-number-format'

export const toNumber = (value?: number, fixed?: number, asNumber = false) => {
  if (!value || isNaN(value)) {
    return (0).toFixed(fixed || 0)
  }
  const formatted = Number(value).toFixed(fixed === undefined ? 5 : fixed)

  return asNumber ? Number(formatted) : formatted.toLocaleString()
}

export const toNumberTag = (value = 0, fixed?: number) => {
  if (!value || isNaN(value)) {
    return (0).toFixed(fixed || 0)
  }

  return (
    <NumericFormat
      value={toNumber(value, fixed === undefined ? 5 : fixed, true)}
      displayType='text'
      thousandSeparator
    />
  )
}
