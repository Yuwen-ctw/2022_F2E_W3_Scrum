import { developerAvatar } from '../../../../../assest/images'
import {
  StyledContainer,
  StyledDialog,
  StyledDialogBig,
  StyledAvatar,
  StyledRoleName,
} from './FlowIntro.styled'

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
      <StyledDialogBig>
        <p>
          Sprint
          是一個短衝，如同前面敏捷教練所提到的，一次sprint一次sprint週期為2周。開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦
          <strong>每日站立會議（Daily Scrum） </strong>
          ，追蹤成員間的工作狀況。除了每日站立會議，在 Sprint 的結束也會包含
          <strong>短衝檢視會議（Sprint Review）</strong>、
          <strong>短衝自省會議（Sprint Retrospective）</strong>。
        </p>
      </StyledDialogBig>
    </StyledContainer>
  )
}

export default FlowIntro
