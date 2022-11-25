import styled from 'styled-components'
import RetroIntro from './RetroIntro'
import RetroTest from './RetroTest'
import { retro_bg } from '../../../assest/images'
import { useEffect, useState } from 'react'

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

function RetroSection({ onAchieve }) {
  const [isCorrect, setIsCorrect] = useState(false)
  // disable the forward button first
  useEffect(() => onAchieve(false), [])

  function handleChangeInput(boolean) {
    setIsCorrect(boolean)
    boolean && onAchieve(true)
  }
  return (
    <>
      <StyledContainer>
        <RetroIntro isCorrect={isCorrect} />
        <RetroTest onChange={handleChangeInput} />
      </StyledContainer>
      <StyledBG src={retro_bg} alt="background" />
    </>
  )
}
export default RetroSection
