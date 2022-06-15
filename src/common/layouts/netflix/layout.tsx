import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export default function NetflixLayout(props: Props) {
  return (
    <React.Fragment>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  )
}

const Header = styled.header`
  height: 0px;
`
const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 8px);
  padding: 0px;
`

const Footer = styled.footer`
  height: 8px;
`
