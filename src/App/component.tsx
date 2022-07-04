import * as React from 'react'
import './index.scss'
import List from '../List'
import Header from '../Common/Header'
import styled from 'styled-components'

const AppContent = styled.main`
  position: relative;
  height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const App = () => {
  return (
    <main className="app">
      <Header />
      <AppContent>
        <List />
      </AppContent>
    </main>
  )
}
