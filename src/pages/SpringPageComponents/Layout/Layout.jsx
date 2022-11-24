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
  background: ${({ step }) => step > 1 && 'var(--PrimaryLight)'};
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
  position: relative;
  left: -60px;
  width: calc(100% + 120px);
  padding: 0 60px;
  height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ step }) => (step > 1 ? 'var(--SecondDarkL)' : '')};
`
function Layout({ step, onClickNext, onClickBack, enable, children }) {
  return (
    <StyledMain step={step}>
      <ProgressBar step={step} />
      <StyledContent>{children}</StyledContent>
      <StyledStepController step={step}>
        <ButtonBackward step={step} onClickBack={onClickBack} />
        <ButtonForward enable={enable} onClickNext={onClickNext} />
      </StyledStepController>
    </StyledMain>
  )
}
export default Layout
