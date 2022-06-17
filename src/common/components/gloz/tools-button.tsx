import React from 'react'
import styled, { css } from 'styled-components'
import Icon, { IconNames } from '../icon'

interface Props {
  iconName: IconNames
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function ToolsButton(props: Props) {
  return (
    <Container disabled={props.disabled} onClick={props.onClick}>
      <Icon name={props.iconName} />
    </Container>
  )
}

ToolsButton.defaultProps = {
  disabled: false,
}

interface ContainerProps {
  disabled: boolean
}

const Container = styled.div<ContainerProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;

  ${(p) =>
    p.disabled
      ? css`
          opacity: 0.4;
        `
      : css`
          opacity: 0.7;

          &:hover {
            opacity: 1;
          }
        `}
`
