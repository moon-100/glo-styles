import React from 'react'
import { Subtask } from 'src/features/app/app.slice'
import styled from 'styled-components'

interface Props {
  subtaskType: Subtask['type']
}

export default function SubtaskTypeChip(props: Props) {
  return <Container>{props.subtaskType}</Container>
}

const Container = styled.div`
  height: 24px;
  background: #1a61f7;
  border-radius: 20px;
  padding: 3px 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #ffffff;
  user-select: none;
`
