import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PanelInput from './PanelInput'
import { useAppDispatch } from '../../hooks/redux'
import { v4 as uuidv4 } from 'uuid'
import { addListItem } from '../List/listSlice'

const PanelWrapper = styled.section`
  position: relative;
  width: 40%;
  height: 50%;
  background-color: whitesmoke;
  color: #000;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
`

const PanelSubmit = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;
  padding: 0.35rem;
  border-radius: 0.25rem;
  background-color: rgba(34, 41, 180, 0.76);
  color: black;
  font-size: 1.35rem;
  cursor: pointer;
  &:hover {
    &:not(:disabled) {
      background-color: whitesmoke;
    }
  }
`

interface Props {}

export const Panel = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const handleAddItem = () => {
    const payload: { id: string; title: string } = {
      id: uuidv4(),
      title: inputValue,
    }

    dispatch(addListItem(payload))
    setInputValue('')
  }

  return (
    <PanelWrapper>
      <h2>Panel</h2>
      <PanelInput setInputValue={setInputValue} inputValue={inputValue} />
      <PanelSubmit onClick={handleAddItem} disabled={!inputValue}>
        add item
      </PanelSubmit>
    </PanelWrapper>
  )
}

export default Panel
