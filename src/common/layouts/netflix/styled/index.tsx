import styled from 'styled-components'

const DEFAULT_GAP = 8
const DEFAULT_PADDING = 8
const DEFAULT_HEIGHT = 64

export const Header = styled.div`
  height: ${DEFAULT_HEIGHT}px;
  width: 100%;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
  padding: 8px 16px;
`

export const Body = styled.div`
  width: 100%;
  height: calc(100% - ${DEFAULT_HEIGHT + DEFAULT_PADDING}px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
  margin-top: 8px;
`

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`

export const VideoWrapper = styled.div`
  flex: 0 0 42%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const VideoToolBox = styled.div`
  height: 42px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2b333d;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const VideoBox = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const SubtitleWrapper = styled.div`
  flex: 1 0 56%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SubtitleToolWrapper = styled.div`
  height: 42px;
  display: flex;
  gap: 8px;
`

export const SubtitleToolBox = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2b333d;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const SubtitleSearchBox = styled.div`
  width: 160px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #2b333d;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const SubtitleBox = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const SoundwaveBox = styled.div`
  height: 216px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`
