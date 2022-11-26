import { StyledContainer, StyledBG } from './RetroSection.styled'
import { RetroIntro, RetroTest } from './components'
import { retro_bg } from '../../../../assest/images'
import { useEffect, useState } from 'react'

function RetroSection({ onAchieve }) {
  const [isCorrect, setIsCorrect] = useState(true)

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
