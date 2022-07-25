import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../../../hooks/redux'
import {
  deleteListItem,
  checkListItem,
  moveListItemToTop,
  unCheckListItem,
} from '../listSlice'
import { setPause } from '../../../services/async'

const Item = styled.li`
  position: relative;
  padding-top: 0.6rem;
  font-size: 1.25rem;
  font-family: 'Roboto Light', serif;

  & h3 {
    padding-left: 0.5rem;

    &:hover {
      cursor: pointer;
      transition: ease-in-out 0.35s;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 1px;
        background-color: #000;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 1px;
        height: 10px;
        background-color: #000;
      }
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.51);
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
      await setPause(1000)
      await dispatch(moveListItemToTop(props.id))
    } else {
      await setPause(1000)
      await dispatch(unCheckListItem(props.id))
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
