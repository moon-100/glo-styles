import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function GlozLayout(props: Props) {
  return (
    <React.Fragment>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  )
}

const Header = styled.header`
  height: 8px;
`
const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 16px);
  padding: 0 8px;
`

const Footer = styled.footer`
  height: 8px;
`
