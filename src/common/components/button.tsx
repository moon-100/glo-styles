import React from 'react'
import styled from 'styled-components'

interface Props {
  leftIcon?: any
  rightIcon?: any
  text?: string
  styles?: React.CSSProperties
}

export default function Button(props: Props) {
  return (
    <Container style={props.styles}>
      {props.leftIcon}
      {props.text}
      {props.rightIcon}
    </Container>
  )
}

const Container = styled.button`
  border-radius: 18px;
  width: 100%;
  height: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  background: #1a61f7;

  &:hover {
    background: #2b72f8;
  }
`
