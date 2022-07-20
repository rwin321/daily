import * as React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import { useAppSelector } from '../../hooks/redux'

const Wrapper = styled.ul`
  position: relative;
  width: 49%;
  height: 80%;
  max-height: 80vh;
  overflow-y: auto;
  margin-left: 1rem;
  padding: 2rem;
  background-color: whitesmoke;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
    padding: 0.2rem;
  }
`

interface Props {}

export const List = (props: Props) => {
  const list = useAppSelector((state) => state.todosList.list)

  return (
    <Wrapper>
      {list?.map((li) => (
        <ListItem
          key={li.id}
          id={li.id}
          title={li.title}
          isChecked={li.isChecked}
        />
      ))}
    </Wrapper>
  )
}
