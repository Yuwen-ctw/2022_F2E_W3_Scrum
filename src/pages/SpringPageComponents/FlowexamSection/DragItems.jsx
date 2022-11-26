import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
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

function DragItems({ dragItems }) {
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
    <Droppable droppableId="exam_init">
      {provided => (
        <StyledDropContainer
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {dragItems.map((item, index) => (
            <Draggable
              draggableId={`exam-item-${index}`}
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
  )
}

export default DragItems
