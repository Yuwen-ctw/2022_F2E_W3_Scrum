import { StyledMessage } from './homepage.styled'

function MessageDialog() {
  return (
    <>
      <StyledMessage>歡迎來到Scrum新手村~我是鈦坦吉祥物Tica!</StyledMessage>
      <StyledMessage>首先恭喜你加入 TT 資訊小組！</StyledMessage>
      <StyledMessage>
        {' '}
        在正式加入專案開發之前，需要請你先了解{' '}
        <strong>Scrum 的流程與精神！</strong>
      </StyledMessage>
      <StyledMessage>接受挑戰任務，成為Scrum大師吧～</StyledMessage>
    </>
  )
}

export default MessageDialog
