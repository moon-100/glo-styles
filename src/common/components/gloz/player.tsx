import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'
import { Video } from 'src/features/app/app.slice'
import Icon from '../icon'
import ToolsButton from './tools-button'

interface Props {
  video: Nullable<Video>
}

export const CONTROLS_RANGE_MIN = 0
export const CONTROLS_RANGE_MAX = 0.999999

export default function Player(props: Props) {
  const playerRef = useRef<any>(null)
  const [playing, setPlaying] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const handleProgress = () => {}
  const handleError = () => {}
  return (
    <Container>
      <VideoWrapper>
        <ReactPlayer
          url={props.video?.url}
          ref={playerRef}
          width="100%"
          height="100%"
          playing={playing}
          playbackRate={playbackRate}
          className="react-player"
          onEnded={() => {}}
          onProgress={handleProgress}
          onError={handleError}
          progressInterval={50}
        />
        <VideoSubtitles />
      </VideoWrapper>
      <VideoControls>
        <ControlProgress>
          <ProgressSeek>
            <input type="range" step="any" />
          </ProgressSeek>
          <ProgressTime>
            <span>00:00:00:00</span>
            <span> / </span>
            <span>00:01:29:00</span>
          </ProgressTime>
        </ControlProgress>
        <ControlVideo>
          <VideoTimes>
            <ToolsButton iconName="PrevFrame" onClick={() => {}} />
            <ToolsButton iconName="PrevSeconds" onClick={() => {}} />
            <ToolsButton iconName="Play" onClick={() => {}} />
            <ToolsButton iconName="NextSeconds" onClick={() => {}} />
            <ToolsButton iconName="NextFrame" onClick={() => {}} />
          </VideoTimes>
          <VideoRates>
            <PlaybackRateSelect
              rate={0.5}
              isActive={playbackRate === 0.5}
              onChangeRate={setPlaybackRate}
            />
            <PlaybackRateSelect
              rate={1}
              isActive={playbackRate === 1}
              onChangeRate={setPlaybackRate}
            />
            <PlaybackRateSelect
              rate={2}
              isActive={playbackRate === 2}
              onChangeRate={setPlaybackRate}
            />
          </VideoRates>
        </ControlVideo>
      </VideoControls>
    </Container>
  )
}

interface PlaybackRateSelectProps {
  rate: number
  isActive: boolean
  onChangeRate: React.Dispatch<React.SetStateAction<number>>
}

const PlaybackRateSelect = (props: PlaybackRateSelectProps) => {
  return (
    <PlaybackRateSelectContainer
      isActive={props.isActive}
      onClick={() => props.onChangeRate(props.rate)}
    >
      <span>{props.rate}X</span>
    </PlaybackRateSelectContainer>
  )
}

interface PlaybackRateSelectContainerProps {
  isActive: boolean
}

const PlaybackRateSelectContainer = styled.div<PlaybackRateSelectContainerProps>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  span {
    ${(p) =>
      p.isActive
        ? css`
            background-color: rgb(255, 255, 255);
            color: rgb(53, 61, 72);
            border-radius: 7px;
            padding: 3px 6px;
          `
        : css``}
  }
`

const Container = styled.div`
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

//  Videos
const VideoWrapper = styled.div`
  background-color: black;
  padding: 17px 0;
  flex: 1;
`
const VideoSubtitles = styled.div``

// Controls
const VideoControls = styled.div`
  height: 90px;
`
const ControlProgress = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: #2b333d;
  border-radius: 4px;
  padding: 5px 8px;
`
const ProgressSeek = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #1f2631;
    cursor: pointer;
    outline: none;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #1a61f7;
  }
`
const ProgressTime = styled.div`
  span {
    font-size: 10px;
    line-height: 15px;
    opacity: 0.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const ControlVideo = styled.div`
  position: relative;
  display: flex;
  margin-top: 16px;
`
const VideoTimes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1;
`
const VideoRates = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  position: absolute;
  transform: translate(-50%);
  font-size: 10px;
  top: 30px;
  left: 50%;

  @media (min-width: 1200px) {
    top: 0;
    right: -38px;
    left: unset;
  }
`
