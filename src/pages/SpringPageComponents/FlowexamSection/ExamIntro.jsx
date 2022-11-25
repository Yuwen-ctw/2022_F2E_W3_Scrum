import styled from 'styled-components'
import Dialog from '../share/Dailog'
import { developerAvatar } from '../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 78px;
`

const StyledDialog = styled(Dialog)`
  padding: 15px 19px;
  width: 100%;
  max-width: 1074px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  p {
    margin-top: 0px;
  }
  span {
    display: block;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    color: #e8433f;
  }
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
