import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../icon'
import ToolsButton from './tools-button'
import ToolsFence from './tools-fence'

interface Props {}

type FindType = 'Alert' | 'Block'

export default function SubtitleTools(props: Props) {
  const [findTarget, setFindTarget] = useState<Nullable<FindType>>(null)
  const handleGuide = () => {}
  const handleAddSubtitle = () => {}
  const handleSelectAllSubtitle = () => {}
  const handleRemoveSubtitle = () => {}
  const handleAddForcedNarrative = () => {}
  const handleAddAnnotation = () => {}
  const handleFindAlert = () => {
    setFindTarget(findTarget === null ? 'Alert' : null)
  }
  const handleFindBlock = () => {
    setFindTarget(findTarget === null ? 'Block' : null)
  }
  const handleSpellCheck = () => {}

  // find
  const handleDecreaseError = () => {}
  const handleIncreaseError = () => {}
  const handleCleanFindTarget = () => {}
  return (
    <Container>
      <ToolsButton iconName="Guide" onClick={handleGuide} />
      <ToolsFence />
      <ToolsButton iconName="AddSubtitle" onClick={handleAddSubtitle} />
      <ToolsFence />
      <ToolsButton
        iconName="SelectAllSubtitle"
        onClick={handleSelectAllSubtitle}
      />
      <ToolsFence />
      <ToolsButton iconName="Remove" onClick={handleRemoveSubtitle} />
      <ToolsFence />
      <ToolsButton
        iconName="ForcedNarrative"
        onClick={handleAddForcedNarrative}
      />
      <ToolsFence />
      <ToolsButton iconName="Annotation" onClick={handleAddAnnotation} />
      <ToolsFence />
      <ToolsButton iconName="Alert" onClick={handleFindAlert} />
      <ToolsFence />
      <ToolsButton iconName="Block" onClick={handleFindBlock} />
      <ToolsFence />
      <ToolsButton iconName="SpellCheck" onClick={handleSpellCheck} />

      {findTarget ? (
        <ErrorPopup>
          <ErrorName>{findTarget}</ErrorName>
          <div>
            <ErrorCount findTarget={findTarget}>i of n</ErrorCount>
            <Icon name="ArrowUpGray" onClick={handleDecreaseError} />
            <Icon name="ArrowDownGray" onClick={handleIncreaseError} />
            <div>
              <ErrorLine />
              <Icon name="Cancel" onClick={handleCleanFindTarget} />
            </div>
          </div>
        </ErrorPopup>
      ) : (
        ''
      )}
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

const ErrorPopup = styled.div``
const ErrorName = styled.span``
interface ErrorCountProps {
  findTarget: Nullable<FindType>
}
const ErrorCount = styled.span<ErrorCountProps>`
  color: ${(p) => (p.findTarget === 'Alert' ? 'rgb(250, 139, 0)' : '#e44646')};
`
const ErrorLine = styled.div``
