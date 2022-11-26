import { Droppable, Draggable } from 'react-beautiful-dnd'
import Dropbox from '../share/Dropbox'
import DropContainer from '../share/DropContainer'
import styled from 'styled-components'
import DragItem from '../share/DragItem'

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
  & :nth-child(2) {
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

function Dropboxes({ dragItems }) {
  function getDraggingStyle(style, isDragging) {
    const draggingStyle = isDragging
      ? {
          scale: '0.6',
          opacity: '0.75',
          outline: '3px solid #473438',
        }
      : {}
    return { ...style, ...draggingStyle }
  }

  return (
    <>
      <StyledDropboxContainer>
        <StyledDropbox></StyledDropbox>
        <StyledDropbox></StyledDropbox>
        <StyledDropbox></StyledDropbox>
      </StyledDropboxContainer>
      <Droppable droppableId="exam_goal">
        {provided => (
          <StyledDropContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {dragItems.map((item, index) => (
              <Draggable
                draggableId={`exam-goal-${index}`}
                index={index}
                key={index}
              >
                {(provided, snapshot) => (
                  <StyledDragItem
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={getDraggingStyle(
                      provided.draggableProps.style,
                      snapshot.isDragging
                    )}
                  >
                    {item.name}
                    <span>{item.en_name}</span>
                  </StyledDragItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </StyledDropContainer>
        )}
      </Droppable>
    </>
  )
}

export default Dropboxes
