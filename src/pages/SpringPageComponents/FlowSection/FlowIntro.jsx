import styled from 'styled-components'
import Dialog from '../share/Dailog'
import { developerAvatar } from '../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  gap: 12px 78px;
`

const StyledDialog = styled(Dialog)`
  padding: 15px 19px;
  width: 100%;
  max-width: 1074px;
  p {
    margin-top: 0px;
    ~ p {
      margin-top: 6px;
    }
  }
`
const StyledDialog__big = styled(StyledDialog)`
  position: relative;
  grid-column: 2 / 3;
`

const StyledAvatar = styled.img`
  width: 100px;
`

const StyledRoleName = styled.p`
  position: absolute;
  bottom: 0px;
  translate: 0 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`

function FlowIntro() {
  return (
    <StyledContainer>
      <div style={{ position: 'relative' }}>
        <StyledAvatar src={developerAvatar} alt="avatar" />
        <StyledRoleName>開發團隊</StyledRoleName>
      </div>
      <StyledDialog>
        <p>等等等等等，你應該還不知道什麼是 Sprint 吧？</p>
        <p>讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！</p>
      </StyledDialog>
      <StyledDialog__big>
        <p>
          Sprint
          是一個短衝，如同前面敏捷教練所提到的，一次sprint一次sprint週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦每日站立會議（Daily
          Scrum） ，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint
          的結束也會包含短衝檢視會議（Sprint Review）、短衝自省會議（Sprint
          Retrospective）。
        </p>
      </StyledDialog__big>
    </StyledContainer>
  )
}

export default FlowIntro
