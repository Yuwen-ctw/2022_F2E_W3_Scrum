import { useState } from 'react'
import { DailyMeetings, FlowIntro, MeetingDetail } from './components'
import { flow_bg, flow_firebg } from '../../../../assest/images'
import { StyledContainer, StyledBG, StyledFireBG } from './FlowSection.styled'

function FlowSection() {
  // radio input status
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
