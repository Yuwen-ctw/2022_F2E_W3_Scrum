import { Link } from 'react-router-dom'
import {
  StyledHomeContainer,
  StyledBtnContainer,
  StyledStartButton,
  StyledArrow,
  StyledWelcomeContainer,
  StyledWelcomeShark,
  StyledMessageContainer,
  StyledAcceptButton,
} from './homepage.styled'
import MessageDialog from './MessageDialog'
import AlertScreen from './AlertScreen'
import { homepageBtn, welcomeShark } from '../../assest/images'
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
      <AlertScreen />
    </>
  )
}
export default HomePage
