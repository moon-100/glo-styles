import React from 'react'
import styled from 'styled-components'
import Icon from '../icon'

interface Props {}

export default function ShortcutTools(props: Props) {
  return (
    <Container>
      <Icon name="Shortcut" />
      <span>SHORT CUT</span>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #2f436a;
  border: 1px solid #3f5c99;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  opacity: 0.7;
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  span {
    font-size: 12px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.75px;
  }
`
