import { arrive } from '../../../../../assest/images'
import {
  StyledContainer,
  StyledTile,
  StyledInput,
  StyledIcon,
} from './DailyMeetings.styled'

function DailyMeetings({ checked, onChange }) {
  return (
    <StyledContainer>
      <StyledTile htmlFor="meeting-daily">
        <StyledInput
          type="radio"
          name="meeting"
          value="daily"
          id="meeting-daily"
          checked={checked === 'daily'}
          onChange={e => onChange(e.target.value)}
        />
        <StyledIcon src={arrive} alt="icon" />
        每日站立會議 <p>Daily Scrum</p>
      </StyledTile>
      <StyledTile htmlFor="meeting-review">
        <StyledInput
          type="radio"
          name="meeting"
          value="review"
          id="meeting-review"
          checked={checked === 'review'}
          onChange={e => onChange(e.target.value)}
        />
        <StyledIcon src={arrive} alt="icon" />
        短衝檢視會議 <p>Spring Review</p>
      </StyledTile>
      <StyledTile htmlFor="meeting-retro">
        <StyledInput
          type="radio"
          name="meeting"
          value="retro"
          id="meeting-retro"
          checked={checked === 'retro'}
          onChange={e => onChange(e.target.value)}
        />
        <StyledIcon src={arrive} alt="icon" />
        短衝自省會議 <p>Spring Retrospective</p>
      </StyledTile>
    </StyledContainer>
  )
}

export default DailyMeetings
