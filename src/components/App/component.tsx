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
    transition: ease-in-out 0.45s;
    background-color: rgba(51, 110, 185, 0.56);
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
