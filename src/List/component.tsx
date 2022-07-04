import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  min-width: 30rem;
  max-width: 80vw;
  min-height: 20rem;
  max-height: 70vh;
  padding: 2rem;
  background-color: whitesmoke;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    min-width: 80vw;
  }
`

export const List = () => {
  return <Wrapper>BLOCK</Wrapper>
}
