import React, { useMemo } from 'react'
import styled from 'styled-components'

interface Props {
  firstName: Nullable<string>
  lastName: Nullable<string>
}

export default function UserName(props: Props) {
  const fullName = useMemo(
    () => (props.firstName ? `${props.firstName} ${props.lastName}` : `noname`),
    [props],
  )
  return <Container>{fullName}</Container>
}

const Container = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.35px;
  color: #ffffff;
`
