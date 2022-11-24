import { useState } from 'react'
import { ButtonBackward, ButtonForward } from './component/Button'
import ProgressBar from './component/ProgressBar'
import styled from 'styled-components'
import { introBG } from '../../../assest/images'

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1024px;
  padding: 0 60px;
  background-image: url('${introBG}');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  // content layout
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledContent = styled.section`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const StyledStepController = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
function Layout({ step, onClickNext, onClickBack, children }) {
  const [isComplete, setIscomplete] = useState(true)
  function handleAchieveState() {
    setIscomplete(true)
  }
  return (
    <StyledMain>
      <ProgressBar step={step} />
      <StyledContent>{children}</StyledContent>
      <StyledStepController>
        <ButtonBackward step={step} onClickBack={onClickBack} />
        <ButtonForward enable={isComplete} onClickNext={onClickNext} />
      </StyledStepController>
    </StyledMain>
  )
}
export default Layout
