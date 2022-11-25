import styled from 'styled-components'
import DragItem from '../share/DragItem'
import DropContainer from '../share/DropContainer'

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

function DragItems() {
  return (
    <StyledDropContainer>
      <StyledDragItem>
        每日站立會議<span>Daily Scrum</span>
      </StyledDragItem>
      <StyledDragItem>
        短衝檢視會議<span>Spring Review</span>
      </StyledDragItem>
      <StyledDragItem>
        短衝自省會議<span>Spring Retrospective</span>
      </StyledDragItem>
    </StyledDropContainer>
  )
}

export default DragItems
