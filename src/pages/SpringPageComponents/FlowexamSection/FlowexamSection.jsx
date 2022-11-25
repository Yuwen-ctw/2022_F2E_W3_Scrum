import styled from 'styled-components'
import { useState } from 'react'
import ExamIntro from './ExamIntro'
import ExamHint from './ExamHint'
import DragItems from './DragItems'
import Dropboxes from './Dropboxes'
import { flowexam_bg, flowexam_mainArrowBg } from '../../../assest/images'

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`
const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    var(--SecondDarkT) 0px,
    var(--SecondDarkT) 72px,
    transparent 72px,
    transparent 100%
  );
`
const StyledArrowBG = styled.img`
  width: 100%;
  position: absolute;
  bottom: 72px;
`
const StyledSpring = styled.h1`
  position: absolute;
  top: 500px;
  left: 369px;
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  color: #ffffff;
`
// TODO achieve
function FlowexamSection({ onAchieve }) {
  const [isWrong, setIsWrong] = useState(false)
  function handelDropDown() {
    // fake
    setIsWrong(true)
    onAchieve(true)
  }
  return (
    <>
      <StyledContainer>
        <ExamIntro isWrong={isWrong} />
        <ExamHint />
        <Dropboxes onDrop={handelDropDown} />
        <DragItems />
      </StyledContainer>
      <StyledSpring>Sprint</StyledSpring>
      <StyledBG src={flowexam_bg} alt="background" />
      <StyledArrowBG src={flowexam_mainArrowBg} alt="background" />
    </>
  )
}

export default FlowexamSection
