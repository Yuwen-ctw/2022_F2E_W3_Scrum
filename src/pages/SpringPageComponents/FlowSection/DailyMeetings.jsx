import styled from 'styled-components'
import { arrive } from '../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const StyledTile = styled.label`
  display: block;
  justify-self: center;
  width: fit-content;
  position: relative;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  p {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 1px;
  }
`

const StyledInput = styled.input`
  display: none;
  & + img {
    display: none;
  }
  &:checked + img {
    display: block;
  }
`

const StyledIcon = styled.img`
  position: absolute;
  left: -8px;
  translate: -100% -8px;
`

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
