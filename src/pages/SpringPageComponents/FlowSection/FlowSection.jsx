import styled from 'styled-components'
import FlowIntro from './FlowIntro'
import DailyMeetings from './DailyMeetings'
import MeetingDetail from './MeetingDetail'
import { flow_bg, flow_firebg } from '../../../assest/images'
import { useState } from 'react'

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`

const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    #80c74f 0px,
    #80c74f 72px,
    transparent 72px,
    transparent 100%
  );
`
const StyledFireBG = styled.img`
  position: absolute;
  bottom: 0px;
  right: 22.5%;
  width: 256px;
`

function FlowSection() {
  const [meeting, setMeeting] = useState('daily')
  function handleRadioChange(value) {
    setMeeting(value)
  }
  return (
    <>
      <StyledContainer>
        <FlowIntro />
        <DailyMeetings checked={meeting} onChange={handleRadioChange} />
        <MeetingDetail meeting={meeting} />
      </StyledContainer>
      <StyledBG src={flow_bg} alt="background" />
      <StyledFireBG src={flow_firebg} alt="background" />
    </>
  )
}
export default FlowSection
