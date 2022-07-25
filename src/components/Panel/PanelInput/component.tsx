import * as React from 'react'
import Input from '../../Common/Input'

interface Props {
  setInputValue: (e: string) => void
  inputValue: string
}

export const PanelInput = (props: Props) => {
  const { setInputValue, inputValue } = props

  return (
    <div>
      <Input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        value={inputValue}
        placeholder="type todo"
      />
    </div>
  )
}

export default PanelInput
