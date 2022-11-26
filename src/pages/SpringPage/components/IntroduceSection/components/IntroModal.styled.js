import styled from 'styled-components'

import ModalButton from '../../shareStyle/ModalButton'
const StyledAvatar = styled.img`
  width: 300px;
`

const StyledModalContainer = styled.div`
  position: absolute;
  top: 340px;
  left: 50%;
  translate: -50% 0;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto;
  align-items: center;
  column-gap: 112px;
`
const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #ffffff;
`
const StyledModalButton = styled(ModalButton)`
  position: absolute;
  right: 0px;
  bottom: -64px;
`
export { StyledAvatar, StyledModalContainer, StyledTitle, StyledModalButton }
