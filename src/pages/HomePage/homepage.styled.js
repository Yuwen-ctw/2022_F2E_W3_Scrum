import styled from 'styled-components'
import { homepageBG1, welcomeBG } from '../../assest/images'

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
  color: var(--NeutralLight);
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
  background: var(--PrimaryLight);
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
export {
  StyledHomeContainer,
  StyledBtnContainer,
  StyledStartButton,
  StyledArrow,
  StyledWelcomeContainer,
  StyledWelcomeShark,
  StyledAcceptButton,
  StyledMessageContainer,
  StyledMessage,
}
