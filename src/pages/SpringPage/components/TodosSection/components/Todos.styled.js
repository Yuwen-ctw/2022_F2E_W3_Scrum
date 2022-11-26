import styled from 'styled-components'
import DropContainer from '../../shareStyle/DropContainer'
import DragItem from '../../shareStyle/DragItem'

const StyledDropContainer = styled(DropContainer)`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 42px;
`

const StyledDragItem = styled(DragItem)`
  max-width: 520px;
  &:nth-child(even) {
    margin-left: 60px;
  }
`
export { StyledDropContainer, StyledDragItem }
