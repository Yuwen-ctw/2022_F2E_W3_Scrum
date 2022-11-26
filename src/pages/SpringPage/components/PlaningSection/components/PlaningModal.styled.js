import styled from 'styled-components'
import ModalButton from '../../shareStyle/ModalButton'
import Dialog from '../../shareStyle/Dailog'

const StyledModalContainer = styled.div`
  max-width: 1242px;
  margin: 84px auto 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
`

const StyledDialogContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 156px 1fr;
  column-gap: 48px;
`
const StyledDialog = styled(Dialog)`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  align-self: start;
`

const StyledAvatar = styled.img`
  width: 100px;
  align-self: center;
  justify-self: center;
`

const StyledModalButton = styled(ModalButton)`
  align-self: flex-end;
`
export {
  StyledModalContainer,
  StyledDialogContainer,
  StyledDialog,
  StyledTitle,
  StyledAvatar,
  StyledModalButton,
}
