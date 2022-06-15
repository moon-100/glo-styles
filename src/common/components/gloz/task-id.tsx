import React from 'react'
import { Task } from 'src/features/app/app.slice'
import styled from 'styled-components'

interface Props {
  taskId: Task['id']
}

export default function TaskId(props: Props) {
  return <Container>{props.taskId}</Container>
}

const Container = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.35px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`
