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
  &:nth-child(3) {
    grid-column: 2 / 3;
  }
`
const StyledAvatar = styled.img`
  width: 100px;
`

const StyledRoleName = styled.p`
  position: absolute;
  top: 92px;
  translate: 0 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`

function RetroIntro({ isCorrect }) {
  return (
    <StyledContainer>
      <div style={{ position: 'relative' }}>
        <StyledAvatar src={developerAvatar} alt="avatar" />
        <StyledRoleName>開發團隊</StyledRoleName>
      </div>
      <StyledDialog>
        {isCorrect ? <Description /> : <WrongDescription />}
      </StyledDialog>
      {isCorrect && (
        <StyledDialog>
          <SecondDescription />
        </StyledDialog>
      )}
    </StyledContainer>
  )
}

export default RetroIntro

function Description() {
  return (
    <>
      <p>
        哇新來的，你真的很幸運，今天剛好是開發 B 組的
        Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～
      </p>
      <p>
        我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並
        <strong>記錄在 Confluence 中</strong>。
      </p>
    </>
  )
}
function SecondDescription() {
  return (
    <p>
      重點在於<strong>『正面表述』</strong>，你也思考看看，哪一些是適合 Retro
      的回饋吧～～
    </p>
  )
}

function WrongDescription() {
  return <span>有選項位置好像不太對!可以再調整一下唷~</span>
}
