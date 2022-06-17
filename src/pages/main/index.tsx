import { useContext, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import Button from 'src/common/components/button'
import DueDate from 'src/common/components/gloz/due-date'
import Player from 'src/common/components/gloz/player'
import ProjectName from 'src/common/components/gloz/project-name'
import RemainingTime from 'src/common/components/gloz/remaining-time'
import SearchSubtitle from 'src/common/components/gloz/search-subtitle'
import Soundwave from 'src/common/components/gloz/soundwave'
import TaskId from 'src/common/components/gloz/task-id'
import ShortcutTools from 'src/common/components/gloz/tools-shortcut'
import SubtitleTools from 'src/common/components/gloz/tools-subtitle'
import VideoTools from 'src/common/components/gloz/tools-video'
import UserName from 'src/common/components/gloz/user-name'
import Icon from 'src/common/components/icon'
import IconButton from 'src/common/components/icon-button'
import LanguageChip from 'src/common/components/language-chip'
import SubtaskTypeChip from 'src/common/components/subtask-type-chip'
import TaskTypeChip from 'src/common/components/task-type-chip'
import GlozLayout from 'src/common/layouts/gloz/layout'
import {
  Body,
  BotWrapper,
  ChipWrapper,
  InfoBox,
  InfoBoxCenter,
  InfoBoxLeft,
  InfoBoxRight,
  InfoWrapper,
  ShortcutBox,
  SoundwaveBox,
  SubtitleBox,
  SubtitleToolBox,
  TimeWrapper,
  ToolWrapper,
  TopWrapper,
  VideoBox,
  VideoToolBox,
} from 'src/common/layouts/gloz/styled'
import { initApp } from 'src/features/app/app.service'
import { getAppData } from 'src/features/app/app.slice'
import { AuthContext } from 'src/providers/auth.provider'
import styled from 'styled-components'

/**
 * @description 검색엔진을 통해서 들어올 오프라인 버전
 */
export default function Main() {
  const { isLoggedIn } = useContext(AuthContext)
  const dispatch = useAppDispatch()
  const appData = useAppSelector(getAppData)

  const handleExpire = () => {
    // show modal
  }

  useEffect(() => {
    console.log('[APP_DATA] appData=', appData)
  }, [appData])

  useEffect(() => {
    console.log('[LOAD_MAIN] isLoggedIn=', isLoggedIn)
    if (isLoggedIn) {
      dispatch(initApp())
    }
  }, [isLoggedIn])

  return (
    <GlozLayout>
      <Body>
        <TopWrapper>
          <VideoBox>
            <Player video={appData.video} />
          </VideoBox>
          <InfoWrapper>
            <InfoBox>
              <InfoBoxLeft>
                <div>
                  <TaskId taskId={appData.task?.id} />
                  <UserName
                    firstName={appData.user?.firstName}
                    lastName={appData.user?.lastName}
                  />
                </div>
                <ProjectName projectName={appData.info?.projectName} />
                <ChipWrapper>
                  <LanguageChip {...appData?.info} />
                  <TaskTypeChip taskType={appData.task?.type} />
                  <SubtaskTypeChip subtaskType={appData.subtask?.type} />
                </ChipWrapper>
              </InfoBoxLeft>
              <InfoBoxCenter>
                {appData.info?.dueAt ? (
                  <TimeWrapper>
                    <RemainingTime
                      dueAt={appData.info?.dueAt}
                      onExpire={handleExpire}
                    />
                    <DueDate dueAt={appData.info?.dueAt} />
                  </TimeWrapper>
                ) : null}
              </InfoBoxCenter>
              <InfoBoxRight>
                <Button
                  leftIcon={<Icon name="Submit" size="18" />}
                  text="SUBMIT"
                />
                <div>
                  <IconButton icon={<Icon name="Layout" size="18" />} />
                  <SearchSubtitle />
                </div>
              </InfoBoxRight>
            </InfoBox>
            <ToolWrapper>
              <VideoToolBox>
                <VideoTools />
              </VideoToolBox>
              <SubtitleToolBox>
                <SubtitleTools />
              </SubtitleToolBox>
              <ShortcutBox>
                <ShortcutTools />
              </ShortcutBox>
            </ToolWrapper>
            <SoundwaveBox>
              <Soundwave />
            </SoundwaveBox>
          </InfoWrapper>
        </TopWrapper>
        <BotWrapper>
          <SubtitleBox></SubtitleBox>
        </BotWrapper>
      </Body>
    </GlozLayout>
  )
}
