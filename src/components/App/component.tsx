import * as React from 'react'
import './index.scss'
import List from '../List'
import Header from '../Common/Header'
import Panel from '../Panel'
import styled from 'styled-components'

const AppContent = styled.main`
  position: relative;
  height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  &:hover {
    transition: ease-out 0.4s;
    background-color: rgba(51, 110, 185, 0.56);
    border-top: 3px solid #000;
  }
`

export const App = () => {
  return (
    <main className="app">
      <Header />
      <AppContent>
        <List />
        <Panel />
      </AppContent>
    </main>
  )
}
