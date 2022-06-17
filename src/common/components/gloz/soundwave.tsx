import React from 'react'
import styled from 'styled-components'
import Icon from '../icon'

interface Props {}

const MAXIMUM_ZOOM = 10
const MINIMUM_ZOOM = 1
export default function Soundwave(props: Props) {
  return (
    <Container>
      <SoundwaveHeader>
        <HeaderMessages></HeaderMessages>
        <HeaderZoom>
          <ZoomButton>
            <Icon name="ZoomIn" />
          </ZoomButton>
          <ZoomSlider>
            <input type="range" min={MINIMUM_ZOOM} max={MAXIMUM_ZOOM} />
          </ZoomSlider>
          <ZoomButton>
            <Icon name="ZoomOut" />
          </ZoomButton>
        </HeaderZoom>
      </SoundwaveHeader>
      <SoundwaveBodyOuter>
        <SoundwaveBodyInner>
          <SoundwaveTimes></SoundwaveTimes>
          <SoundwaveSubtitles></SoundwaveSubtitles>
        </SoundwaveBodyInner>
        <SoundwaveHead></SoundwaveHead>
      </SoundwaveBodyOuter>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const SoundwaveHeader = styled.div`
  display: flex;
  height: 24px;
`

const HeaderMessages = styled.div`
  flex: 1;
`

const HeaderZoom = styled.div`
  display: flex;
  align-items: center;
`

const ZoomButton = styled.span`
  cursor: pointer;
`

const ZoomSlider = styled.span`
  width: 80px;
  line-height: 4px;
  margin: 0 16px;

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #353d48;
    cursor: pointer;
    outline: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1a61f7;
  }
`

const SoundwaveBodyOuter = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: calc(100% - 40px);
  position: relative;
`

const SoundwaveBodyInner = styled.div``
const SoundwaveTimes = styled.div``
const SoundwaveSubtitles = styled.div``
const SoundwaveHead = styled.div``
