import React, { useState } from 'react'
import styled from 'styled-components'
import GroupButton from '../group-button'
import ToolsButton from './tools-button'
import ToolsFence from './tools-fence'

interface Props {}

export default function VideoTools(props: Props) {
  const [isTop, setIsTop] = useState(false)
  const [isFocus, setIsFocus] = useState(true)
  return (
    <Container>
      <GroupButton
        buttons={[
          {
            iconName: 'SubtitleBot',
            activeIconName: 'SubtitleBotSelected',
            isActive: !isTop,
            handleClick: () => setIsTop(false),
          },
          {
            iconName: 'SubtitleTop',
            activeIconName: 'SubtitleTopSelected',
            isActive: isTop,
            handleClick: () => setIsTop(true),
          },
        ]}
        disabled={!isFocus}
      />
      <ToolsButton iconName="Music" onClick={() => {}} />
      <ToolsFence />
      <ToolsButton iconName="Italic" onClick={() => {}} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
