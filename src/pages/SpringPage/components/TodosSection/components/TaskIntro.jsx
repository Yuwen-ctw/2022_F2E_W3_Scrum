import { productOwnerAvatar, jira } from '../../../../../assest/images'
import { StyledContainer, StyledAvatar, StyledDialog } from './TaskIntro.styled'

function TaskIntro() {
  return (
    <StyledContainer>
      <StyledAvatar src={productOwnerAvatar} alt="avatar" />
      <StyledDialog width={'823px'}>
        <p>
          請試著把需求放到產品待辦清單，並<strong>自由</strong>
          調整待辦的優先度順序。 我們公司也推薦使用 Jira 來做任務的管理呢！
        </p>
        <img src={jira} alt="Jira" />
      </StyledDialog>
    </StyledContainer>
  )
}

export default TaskIntro
