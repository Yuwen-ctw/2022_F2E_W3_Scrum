import styled from 'styled-components'

const ModalButton = styled.div`
  width: 208px;
  height: 74px;
  background: var(--SecondLightT);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 74px;
  color: #473438;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      #70d6df;
  }
  &:active {
    box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export default ModalButton
