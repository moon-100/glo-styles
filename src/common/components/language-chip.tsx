import React from 'react'
import styled from 'styled-components'

interface Props {
  sourceLanguageCode: string
  sourceLanguageName?: string
  targetLanguageCode: string
  targetLanguageName?: string
}

export default function LanguageChip(props: Props) {
  return (
    <Container>
      {props.sourceLanguageCode} <span>→</span> {props.targetLanguageCode}
    </Container>
  )
}

const Container = styled.div`
  height: 24px;
  background: #ffffff;
  border: 1px solid #aaaaaa;
  border-radius: 20px;
  padding: 3px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  color: #111111;
  user-select: none;
  text-transform: uppercase;

  & > span {
    color: #aaaaaa;
  }
`
