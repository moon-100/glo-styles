import styled from 'styled-components'

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  gap: 8px;
  flex: 0 0 42%;
`

export const VideoBox = styled.div`
  flex: 0 0 39.18539325842696%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const InfoWrapper = styled.div`
  flex: 0 1 60.25280898876404%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InfoBox = styled.div`
  height: 102px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;

  display: inline-flex;
  gap: 8px;
  padding: 16px 16px 14px;
`

export const InfoBoxLeft = styled.div`
  flex: 0 0 50%;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const InfoBoxCenter = styled.div`
  flex: 0 1 30%;
`

export const InfoBoxRight = styled.div`
  flex: 1;
  // flex: 0 1 18%;

  & > div:nth-child(2) {
    display: flex;
    gap: 8px;
    width: 100%;
    margin-top: 8px;
  }
`

export const ChipWrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  margin-top: 8px;
`

export const TimeWrapper = styled.div`
  background: #49505a;
  border-radius: 8px;
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  width: 100%;
  height: 100%;
`

export const ToolWrapper = styled.div`
  height: 42px;
  display: inline-flex;
  gap: 8px;
`

export const VideoToolBox = styled.div`
  flex: 0 1 28%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const SubtitleToolBox = styled.div`
  flex: 0 0 51%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const ShortcutBox = styled.div`
  flex: 0 0 19%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const SoundwaveBox = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`

export const BotWrapper = styled.div`
  flex: 0 0 57%;
`

export const SubtitleBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1f2631;
  box-shadow: rgb(0 0 0 / 16%) 0px 8px 16px 0px;
`
