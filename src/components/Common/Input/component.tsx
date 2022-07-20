import styled from 'styled-components'

export const Input = styled.input`
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: #000;
  &:focus {
    transition: ease-out 0.65s;
    transform: skewY(-2deg);
    box-shadow: 2px 2px 2px white;
  }
`
