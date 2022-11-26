import { ButtonBackward, ButtonForward } from './Button'
import ProgressBar from './ProgressBar'
import {
  StyledMain,
  StyledContent,
  StyledStepController,
} from './Layout.styled'

function Layout({ step, onClickNext, onClickBack, enable, children }) {
  enable = step === 1 ? true : enable
  enable = step === 4 ? true : enable
  return (
    <StyledMain step={step}>
      <ProgressBar step={step} />
      <StyledContent>{children}</StyledContent>
      <StyledStepController step={step}>
        <ButtonBackward step={step} onClickBack={onClickBack} />
        <ButtonForward enable={true} onClickNext={onClickNext} />
        <ButtonForward enable={enable} onClickNext={onClickNext} />
      </StyledStepController>
    </StyledMain>
  )
}
export default Layout
