import styled from 'styled-components'
import DropContainer from '../share/DropContainer'
import DragItem from '../share/DragItem'
import { Droppable, Draggable } from 'react-beautiful-dnd'
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

function Todos({ dragItems }) {
  function getDraggingStyle(style, isDragging) {
    const draggingStyle = isDragging
      ? {
          scale: '0.6',
          margin: '0 104px',
          opacity: '0.75',
          outline: '3px solid #473438',
        }
      : {}
    return { ...style, ...draggingStyle }
  }
  return (
    <Droppable droppableId="todos">
      {provided => (
        <StyledDropContainer
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {dragItems.map((item, index) => (
            <Draggable
              draggableId={`todos-left-${index}`}
              index={index}
              key={index}
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
                    {item.item}
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
