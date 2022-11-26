import { Droppable, Draggable } from 'react-beautiful-dnd'
import { StyledDropContainer, StyledDragItem } from './Todos.styled'
import getDraggingStyle from '../../../utilities/getDraggingStyle'

function Todos({ dragItems }) {
  return (
    <Droppable droppableId="todos">
      {provided => (
        <StyledDropContainer
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {dragItems.map((item, index) => (
            <Draggable
              draggableId={`todos-left-${item.id}`}
              index={index}
              key={item.id}
            >
              {(provided, snapshot) => {
                return (
                  <StyledDragItem
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    style={getDraggingStyle(
                      provided.draggableProps.style,
                      snapshot.isDragging
                    )}
                  >
                    {item.texts}
                  </StyledDragItem>
                )
              }}
            </Draggable>
          ))}
          {provided.placeholder}
        </StyledDropContainer>
      )}
    </Droppable>
  )
}

export default Todos
