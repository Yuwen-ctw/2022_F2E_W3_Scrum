import styled from 'styled-components'
import DragItem from '../../shareStyle/DragItem'
import DropContainer from '../../shareStyle/DropContainer'

const StyledDropContainer = styled(DropContainer)`
  position: absolute;
  top: 260px;
  right: 14px;
  gap: 32px;
`

const StyledDragItem = styled(DragItem)`
  padding: 12px 22.5px;
  width: 288px;
  font-size: 36px;
`
export { StyledDropContainer, StyledDragItem }
