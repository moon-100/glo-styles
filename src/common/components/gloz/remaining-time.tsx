import React, { useEffect, useState } from 'react'
import useInterval from 'src/common/hooks/use-interval'
import styled from 'styled-components'
import moment from 'moment-timezone'

export enum RemainingTimeFormat {
  HHMM = 0,
  HHMMSS = 1,
}

interface Props {
  dueAt: Nullable<Date>
  format: RemainingTimeFormat
  onExpire: () => void
}

export const padZero = (time: number) => ('0' + time).slice(-2)

// 남은 시간(시:분) 체크
export const getRemainingTime = (dueAt: Date) => {
  if (!dueAt) return '00:00'
  const duration = moment.duration(moment(dueAt).diff(moment()))
  if (duration.asSeconds() < 0) return '00:00'
  let hh = Math.floor(duration.asHours())
  let mm = duration.minutes()
  return `${padZero(hh)}:${padZero(mm)}`
}

export const getTimelimit = (dueAt: Date) => {
  if (!dueAt) return '00:00:00'
  const duration = moment.duration(moment(dueAt).diff(moment()))
  if (duration.asSeconds() < 0) return '00:00:00'
  let hh = Math.floor(duration.asHours())
  let mm = duration.minutes()
  let ss = duration.seconds()
  return `${padZero(hh)}:${padZero(mm)}:${padZero(ss)}`
}

export default function RemainingTime(props: Props) {
  const [delay, setDelay] = useState(2 * 1000)
  const [remainingTime, setRemainingTime] = useState('')

  function getTime(dueAt: Date, format: RemainingTimeFormat) {
    return format === RemainingTimeFormat.HHMMSS
      ? getTimelimit(dueAt)
      : getRemainingTime(dueAt)
  }

  function getDelay(format: RemainingTimeFormat) {
    return format === RemainingTimeFormat.HHMMSS ? 1000 : 60 * 1000
  }

  function initRemainingTime() {
    const { dueAt, format } = props
    if (!dueAt) return
    setRemainingTime(getTime(dueAt, format))
    setDelay(getDelay(format))
  }

  useInterval(() => {
    initRemainingTime()
  }, delay)

  useEffect(() => {
    initRemainingTime()
  }, [props.dueAt])

  useEffect(() => {
    if (remainingTime) {
      const result = remainingTime
        .split(':')
        .reduce((a, b) => a + parseInt(b), 0)
      if (result === 0) props.onExpire()
    }
  }, [remainingTime])

  return (
    <Container>
      <div>Remaining time</div>
      <hr />
      <div>{props.dueAt ? remainingTime : '-'}</div>
    </Container>
  )
}

RemainingTime.defaultProps = {
  format: RemainingTimeFormat.HHMM,
}

const Container = styled.div`
  flex: 0 0 39%;
  background: #353d48;
  border-radius: 4px;
  padding: 5px 4px 4px;

  & > div:first-child {
    width: 100%;
    height: 14px;
    line-height: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.35px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.7;
  }

  hr {
    margin: 4px auto;
    border: 1px solid #cccccc;
    width: 32px;
    height: 1px;
  }

  & > div:last-child {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.25px;
    color: #ffffff;
  }
`
