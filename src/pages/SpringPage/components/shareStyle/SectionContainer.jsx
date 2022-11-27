import styled, { keyframes } from 'styled-components'

const slideFromLeft = keyframes`
  from {
    translate: 100% -100%;
  }
  // to{
  //   translate: 0% -100%;
  // }
`

const slideToLeft = keyframes`
  to {
    translate: -100%;
  }
`

const StyledSection = styled.section`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  animation: ${slideFromLeft};
`
export default StyledSection
