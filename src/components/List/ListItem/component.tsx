import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../../../hooks/redux'
import { deleteListItem, checkListItem, moveListItemToTop } from '../listSlice'
import { setPause } from '../../../services/async'

const Item = styled.li`
  position: relative;
  padding-top: 0.6rem;
  font-size: 1.25rem;
  font-family: 'Roboto Light', serif;

  & h3 {
    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.62);
      transition: ease-in-out 0.35s;
    }
    &:active {
      background-color: #000;
    }
  }
`

const CloseBtn = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;

  & svg:hover {
    color: red;
  }
`

interface Props {
  id: string
  title: string
  isChecked?: boolean
}

export const ListItem = (props: Props) => {
  const dispatch = useAppDispatch()

  const handleDeleteNote = () => {
    dispatch(deleteListItem(props.id))
  }

  const handleCheckItem = async () => {
    await dispatch(checkListItem(props.id))
    if (!props.isChecked) {
      await setPause(1800)
      await dispatch(moveListItemToTop(props.id))
    }
  }

  return (
    <Item>
      <CloseBtn>
        <FontAwesomeIcon
          size="1x"
          icon={faClose}
          onClick={handleDeleteNote}
          color="black"
          className="x-mark"
        />
      </CloseBtn>
      <h3
        onClick={handleCheckItem}
        style={{ textDecoration: props.isChecked ? 'line-through' : 'none' }}
      >
        {props.title}
      </h3>
    </Item>
  )
}
