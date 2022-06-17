import React from 'react'
import styled from 'styled-components'
import ToolsButton from './gloz/tools-button'

interface ButtonProps {
  isActive: boolean
  iconName: 'SubtitleBot' | 'SubtitleTop'
  activeIconName: 'SubtitleBotSelected' | 'SubtitleTopSelected'
  handleClick: React.MouseEventHandler<HTMLDivElement>
}

interface Props {
  styles?: React.CSSProperties
  buttons: ButtonProps[]
  disabled: boolean
}

export default function GroupButton(props: Props) {
  const getIconName = (buttonProps: ButtonProps) => {
    return buttonProps.isActive
      ? buttonProps.activeIconName
      : buttonProps.iconName
  }
  return (
    <Container style-={props.styles}>
      {props.buttons.map((buttonProps) => {
        return (
          <ToolsButton
            key={buttonProps.iconName}
            iconName={getIconName(buttonProps)}
            disabled={props.disabled}
            onClick={buttonProps.handleClick}
          />
        )
      })}
    </Container>
  )
}

GroupButton.defaultProps = {
  disabled: false,
}

const Container = styled.div`
  height: 34px;
  background: #181924;
  border-radius: 4px;
  display: inline-flex;
  gap: 8px;
  padding: 5px 8px;
`
