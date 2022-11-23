import styled from 'styled-components'
import {
  arrive,
  unarrive,
  complete,
  past,
  coming,
} from '../../../../assest/images'

const StyledProgressBarContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledStageIcon = styled.div`
  width: 48px;
  height: 48px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('${({ step, id }) => {
    if (step > id) return complete
    if (step < id) return unarrive
    return arrive
  }}');
`

const StyledFootPrint = styled.div`
  width: 176px;
  height: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('${({ step, id }) => (step > id ? past : coming)}');
`

function ProgressBar({ step }) {
  return (
    <StyledProgressBarContainer>
      <StyledStageIcon step={step} id={1} />
      <StyledFootPrint step={step} id={1} />
      <StyledStageIcon step={step} id={2} />
      <StyledFootPrint step={step} id={2} />
      <StyledStageIcon step={step} id={3} />
      <StyledFootPrint step={step} id={3} />
      <StyledStageIcon step={step} id={4} />
      <StyledFootPrint step={step} id={4} />
      <StyledStageIcon step={step} id={5} />
      <StyledFootPrint step={step} id={5} />
      <StyledStageIcon step={step} id={6} />
    </StyledProgressBarContainer>
  )
}
export default ProgressBar
