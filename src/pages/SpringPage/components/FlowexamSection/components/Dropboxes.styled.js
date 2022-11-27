import styled from 'styled-components'
import Dropbox from '../../shareStyle/Dropbox'
import DropContainer from '../../shareStyle/DropContainer'
import DragItem from '../../shareStyle/DragItem'

const StyledDropContainer = styled(DropContainer)`
  position: absolute;
  top: 350px;
  right: 65px;
  width: 616px;
  height: 440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 208px 24px;
  & :nth-child(1) {
    grid-column: 1 / 3;
  }
  & :nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  & :nth-child(3) {
    grid-row: 2 / 3;
  }
`

const StyledDropboxContainer = styled(StyledDropContainer)`
  z-index: -1;
`
const StyledDropbox = styled(Dropbox)`
  width: 296px;
  height: 118px;
  background: rgba(44, 132, 146, 0.5);
  border: 5px dashed #ffffff;
`

const StyledDragItem = styled(DragItem)`
  padding: 12px 22.5px;
  width: 288px;
  font-size: 36px;
  align-self: center;
`

export {
  StyledDropContainer,
  StyledDropboxContainer,
  StyledDropbox,
  StyledDragItem,
}
