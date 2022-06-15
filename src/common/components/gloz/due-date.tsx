import React from 'react'
import styled from 'styled-components'
import moment from 'moment-timezone'

interface Props {
  dueAt: Nullable<Date>
}

export default function DueDate(props: Props) {
  return (
    <Container>
      <div>Due date</div>
      <hr />
      <div>
        {props.dueAt === null ? (
          <Dash>-</Dash>
        ) : (
          moment(props.dueAt)
            .tz(moment.tz.guess())
            .format('MMM DD YYYY, hh:mm:ss a z')
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  // flex: 0 0 60%;
  flex: 1;
  background: #353d48;
  border-radius: 4px;
  padding: 5px 4px 4px;

  & > div:first-child {
    width: 100%;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.35px;
    color: #ffffff;
    mix-blend-mode: normal;
    white-space: nowrap;
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
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.35px;
    color: #FFFFFF;
    height: 28px;
    max-height: 28px;
    text-overflow: ellipsis;
    overflow: hidden;
`

const Dash = styled.strong`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
`
