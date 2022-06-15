import React from 'react'
import { Task } from 'src/features/app/app.slice'
import styled from 'styled-components'

interface Props {
  taskType: Task['type']
}

export default function TaskTypeChip(props: Props) {
  return <Container>{props.taskType}</Container>
}

const Container = styled.div`
  height: 24px;
  background: #c5e9ff;
  border-radius: 20px;
  padding: 3px 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #2ca6f0;
  user-select: none;
`
