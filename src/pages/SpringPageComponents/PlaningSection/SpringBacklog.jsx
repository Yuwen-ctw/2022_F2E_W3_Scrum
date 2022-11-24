import styled from 'styled-components'
import DropContainerTitle from '../share/DropContainTitle'
import DropContainer from '../share/DropContainer'
import Dropbox from '../share/Dropbox'
import { whiteBox, redBox } from '../../../assest/images'
import { useState } from 'react'

const StyledContainer = styled.div`
  margin-top: 36px;
`
const StyledTitle = styled(DropContainerTitle)`
  color: var(--SecondDarkL);
  line-height: 78px;
`

const StyledDropContainer = styled(DropContainer)`
  height: 516px;
  justify-content: space-between;
`

const StyledDropbox = styled(Dropbox)`
  width: 520px;
  height: 84px;
`

const StyledBoxContainer = styled.div`
  position: relative;
  height: 96px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 24px);
  grid-template-rows: 28px 28px;
  column-gap: 8px;
  row-gap: 8px;
  &::after {
    position: absolute;
    bottom: 0px;
    content: '點數超過了唷~再試著調整一下!';
    font-weight: 700;
    color: ${({ score }) => (score > 20 ? '#e8433f' : 'transparent')};
  }
`

function generateBox(score) {
  const box = Array.from({ length: score })
  return box.map((_, index) => (
    <img src={index < 20 ? whiteBox : redBox} key={index} alt={box} />
  ))
}

// TODO add calculate score function
function SpringBacklog() {
  const [score, setScore] = useState(21)
  console.log(setScore)
  return (
    <StyledContainer>
      <StyledTitle>開發 A 組的短衝待辦清單</StyledTitle>
      <StyledBoxContainer score={score}>
        {generateBox(score)}
      </StyledBoxContainer>
      <StyledDropContainer>
        <StyledDropbox />
        <StyledDropbox />
        <StyledDropbox />
        <StyledDropbox />
      </StyledDropContainer>
    </StyledContainer>
  )
}
export default SpringBacklog
