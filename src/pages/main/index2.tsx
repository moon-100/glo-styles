import { useContext, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/hooks'
import NetflixLayout from 'src/common/layouts/netflix/layout'
import {
  Body,
  ContentWrapper,
  Header,
  SoundwaveBox,
  SubtitleBox,
  SubtitleSearchBox,
  SubtitleToolBox,
  SubtitleToolWrapper,
  SubtitleWrapper,
  VideoBox,
  VideoToolBox,
  VideoWrapper,
} from 'src/common/layouts/netflix/styled'
import { initApp } from 'src/features/app/app.service'
import { getAppData } from 'src/features/app/app.slice'
import { AuthContext } from 'src/providers/auth.provider'

/**
 * @description 두번째 레이아웃
 */
export default function Main2() {
  const { isLoggedIn } = useContext(AuthContext)
  const dispatch = useAppDispatch()
  const appData = useAppSelector(getAppData)

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
    <NetflixLayout>
      <Header></Header>
      <Body>
        <ContentWrapper>
          <VideoWrapper>
            <VideoToolBox></VideoToolBox>
            <VideoBox></VideoBox>
          </VideoWrapper>
          <SubtitleWrapper>
            <SubtitleToolWrapper>
              <SubtitleToolBox></SubtitleToolBox>
              <SubtitleSearchBox></SubtitleSearchBox>
            </SubtitleToolWrapper>
            <SubtitleBox></SubtitleBox>
          </SubtitleWrapper>
        </ContentWrapper>
        <SoundwaveBox></SoundwaveBox>
      </Body>
    </NetflixLayout>
  )
}
