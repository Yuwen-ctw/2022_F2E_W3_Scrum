import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  // homepageBG,
  homepageBG1,
  homepageBtn,
  welcomeBG,
  welcomeShark,
} from '../assest/images'

const StyledHomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('${homepageBG1}');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`
const StyledBtnContainer = styled.div`
  position: absolute;
  top: 65%;
  right: 15%;
  text-align: center;
  opacity: 0.75;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`
const StyledStartButton = styled.div`
  width: fit-content;
  margin-bottom: 24px;
  font-size: 60px;
  font-weight: 700;
  line-height: 90px;
  color: #ffffff;
`
const StyledArrow = styled.img``

const StyledWelcomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('${welcomeBG}');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`
const StyledWelcomeShark = styled.img`
  position: absolute;
  bottom: 68px;
  right: 60px;
`

const StyledMessageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 20px;
  top: 250px;
  background: white;
  width: 782px;
  height: 456px;
  border: 5px solid #473438;
  border-radius: 20px;
`
const StyledMessage = styled.p`
  margin: 12px 78px 0 36px;
  font-size: 32px;
  line-height: 48px;
  color: black;
`
const StyledAcceptButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 208px;
  height: 74px;
  background: #70d6df;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 74px;
  color: #473438;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      #70d6df;
  }
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

function HomePage() {
  function handleStartClick() {
    const windowHeight = window.innerHeight
    window.scrollTo({ top: windowHeight, behavior: 'smooth' })
  }

  return (
    <>
      <StyledHomeContainer>
        <StyledBtnContainer onClick={handleStartClick}>
          <StyledStartButton>開始探索</StyledStartButton>
          <StyledArrow src={homepageBtn} alt="button" />
        </StyledBtnContainer>
      </StyledHomeContainer>

      <StyledWelcomeContainer>
        <StyledMessageContainer>
          <MessageDialog />
          <Link to="/spring">
            <StyledAcceptButton>接受挑戰</StyledAcceptButton>
          </Link>
        </StyledMessageContainer>
        <StyledWelcomeShark src={welcomeShark} alt="shark" />
      </StyledWelcomeContainer>
    </>
  )
}
export default HomePage

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
