import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  &.d-none {
    display: none;
  }
`

export default ModalBackground
