import React from 'react'
import styled from 'styled-components'

interface Props {
  icon?: any
}

export default function IconButton(props: Props) {
  return <Container>{props.icon}</Container>
}

const Container = styled.div`
  width: 32px;
  height: 32px;
  display: inline-flex;
  justicy-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #353d48; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`
