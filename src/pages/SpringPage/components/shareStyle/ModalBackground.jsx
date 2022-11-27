import styled, { keyframes } from 'styled-components'

const fadein = keyframes`
from {
  background: rgba(0,0,0,0);
  backdrop-filter: blur(0px);
  opacity: 0.5;
}
to {
  opacity: 1;
}

`

const ModalBackground = styled.div`
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  animation: ${fadein} 0.2s linear;
  &.d-none {
    display: none;
  }
`

export default ModalBackground
