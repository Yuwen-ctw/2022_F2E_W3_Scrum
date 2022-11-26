import {
  StyledContainer,
  StyledDialog,
  StyledAvatar,
  StyledRoleName,
} from './ExamIntro.styled'
import { developerAvatar } from '../../../../../assest/images'

function ExamIntro({ isWrong }) {
  return (
    <StyledContainer>
      <div style={{ position: 'relative' }}>
        <StyledAvatar src={developerAvatar} alt="avatar" />
        <StyledRoleName>開發團隊</StyledRoleName>
      </div>
      <StyledDialog>
        {isWrong ? <WrongDescription /> : <Description />}
      </StyledDialog>
    </StyledContainer>
  )
}

export default ExamIntro

function Description() {
  return (
    <>
      <p>
        那你來試試看，在這經典的 Scrum 流程圖中，這些流程分別代表哪一個會議呢？
      </p>
      <p>請你試著把左下方三個方塊，拖拉至正確的位置上。</p>
    </>
  )
}

function WrongDescription() {
  return <span>有選項位置好像不太對!可以再調整一下唷~</span>
}
