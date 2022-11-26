import { Droppable, Draggable } from 'react-beautiful-dnd'
import { StyledDropContainer, StyledDragItem } from './DragItems.styled'
import getDraggingStyle from '../../../utilities/getDraggingStyle'

function DragItems({ dragItems }) {
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
