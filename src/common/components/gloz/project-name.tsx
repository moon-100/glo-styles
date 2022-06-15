import React from 'react'
import styled from 'styled-components'

interface Props {
  projectName: Nullable<string>
}

export default function ProjectName(props: Props) {
  return <Container>{props.projectName || ''}</Container>
}

const Container = styled.div`
  width: 396px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #ffffff;
`
