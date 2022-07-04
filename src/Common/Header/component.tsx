import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  height: 6rem;
  max-height: 6rem;
  width: 100%;
  background-color: rgba(9, 0, 0, 0.82);
  color: #fff;
`

const HeaderBrand = styled.div`
  width: 7rem;
  height: 100%;
  border: 1px solid #eccbd7;
  margin-right: 2rem;
  padding: 1rem;
`

const HeaderContent = styled.div`
  width: 100%;
  padding: 1rem;
  color: #fff;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBrand>Brand</HeaderBrand>
      <HeaderContent>CONTENT</HeaderContent>
    </HeaderWrapper>
  )
}
