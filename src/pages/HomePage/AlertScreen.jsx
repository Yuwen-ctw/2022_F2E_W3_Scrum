import styled from 'styled-components'
import { useState } from 'react'
import ModalBackground from '../SpringPage/components/shareStyle/ModalBackground'
import Dialog from '../SpringPage/components/shareStyle/Dailog'
import { StyledAcceptButton } from './homepage.styled'
const StyledModalContainer = styled.div`
  position: absolute;
  top: 340px;
  left: 50%;
  translate: -50% 0;
  font-size: 32px;
  line-height: 48px;
`
const StyledButton = styled(StyledAcceptButton)`
  position: absolute;
  translate: -50% 100%;
  bottom: -20px;
  left: 50%;
`

function AlertScreen() {
  const [className, setClassName] = useState('')

  function handleClick() {
    setClassName('d-none')
  }

  return (
    <ModalBackground className={className}>
      <StyledModalContainer>
        <Dialog>請使用 1440 x 1024 以上視窗觀看，謝謝！</Dialog>
        <StyledButton onClick={handleClick}>確定</StyledButton>
      </StyledModalContainer>
    </ModalBackground>
  )
}

export default AlertScreen
