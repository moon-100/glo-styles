import React from 'react'
import styled from 'styled-components'
import Icon from '../icon'

interface Props {}

/**
 * @todo 클릭시 검색창 띄우기
 */
export default function SearchSubtitle(props: Props) {
  return (
    <Container>
      <span>Find the text</span>
      <Icon name="Search" />
    </Container>
  )
}

const Container = styled.div`
  background: #353d48;
  border: 1px solid #49505a;
  border-radius: 8px;
  padding: 4px;
  height: 32px;
  flex: 1;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  & > span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    mix-blend-mode: normal;
  }

  & > * {
    opacity: 0.4;
  }

  &: hover > * {
    opacity: 1;
  }
`
