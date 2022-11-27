import { Droppable, Draggable } from 'react-beautiful-dnd'
import { StyledDropContainer, StyledDragItem } from './DragItems.styled'

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
              {provided => (
                <StyledDragItem
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
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
