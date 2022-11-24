import styled from 'styled-components'
import { productOwnerAvatar, jira } from '../../../assest/images'
import Dialog from '../share/Dailog'

const StyledContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 64px;
`
const StyledAvatar = styled.img`
  width: 100px;
`

const StyledDialog = styled(Dialog)`
  padding: 20px 24px;
  border: 3px solid var(--SecondDarkL);
  display: flex;
  align-items: center;
  height: 112px;
  p {
    margin: 0;
  }
`
function TaskIntro() {
  return (
    <StyledContainer>
      <StyledAvatar src={productOwnerAvatar} alt="avatar" />
      <StyledDialog width={'823px'}>
        <p>
          請試著把需求放到產品待辦清單，並調整待辦的優先度順序。
          我們公司也推薦使用 Jira 來做任務的管理呢！
        </p>
        <img src={jira} alt="Jira" />
      </StyledDialog>
    </StyledContainer>
  )
}

export default TaskIntro
