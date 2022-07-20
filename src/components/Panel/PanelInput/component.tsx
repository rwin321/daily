import * as React from 'react'
import Input from '../../Common/Input'

interface Props {
  setInputValue: (e: string) => void
}

export const PanelInput = (props: Props) => {
  const { setInputValue } = props

  return (
    <div>
      <Input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        placeholder="type todo"
      />
    </div>
  )
}

export default PanelInput
