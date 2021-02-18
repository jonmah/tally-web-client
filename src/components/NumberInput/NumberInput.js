import React, { useState, useEffect } from 'react'

import { Input } from './NumberInput.styled'
import {
  formatNumber,
  hasValidDecimalPlaces,
  hasValidDecimals,
  isLastCharValid,
  isNotANumber,
} from '../../transforms/numbers'

const NumberInput = ({ name, placeholder, register, required }) => {
  const [value, setValue] = useState('')
  const [displayValue, setDisplayValue] = useState('')

  useEffect(() => {
    if (
      isLastCharValid(value) ||
      !hasValidDecimals(value) ||
      !hasValidDecimalPlaces(value)
    ) {
      // Strip off most recent character if it violates the composition of a number
      const removedLastChar = value.substring(0, value.length - 1)
      setValue(isLastCharValid(removedLastChar) ? '' : removedLastChar)
    } else if (value?.length > 0) {
      // Protect against copy/pasting a non-number
      const cleanValue = value.replaceAll(',', '')
      setValue(isNotANumber(cleanValue) ? '' : value)
      setDisplayValue(isNotANumber(cleanValue) ? '' : formatNumber(value))
    }
  }, [value])

  return (
    <Input
      name={name}
      onBlur={() => setValue(parseFloat(value.replaceAll(',', '')).toFixed(2))}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
      ref={register({ required })}
      value={displayValue}
    />
  )
}

export default NumberInput