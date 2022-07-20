import * as React from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo.png'

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  height: 6rem;
  max-height: 6rem;
  width: 100%;
  color: #fff;
  border-bottom: 1px solid #000;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const HeaderBrand = styled.div`
  width: 7rem;
  height: 100%;
  margin-right: 2rem;
`

const HeaderContent = styled.div`
  width: 100%;
  padding: 1rem;
  color: #fff;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBrand>
        <img src={logo} alt="" />
      </HeaderBrand>
      <HeaderContent>CONTENT</HeaderContent>
    </HeaderWrapper>
  )
}
