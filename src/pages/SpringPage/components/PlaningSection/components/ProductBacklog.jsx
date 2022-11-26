import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  StyledContainer,
  StyledTitle,
  StyledDropContainer,
  StyledBox,
  StyledDragItem,
} from './ProductBacklog.styled'
import getDraggingStyle from '../../../utilities/getDraggingStyle'

function ProductBacklog({ dragItems }) {
  return (
    <StyledContainer>
      <StyledTitle>
        產品待辦清單<span>Product Backlog</span>
      </StyledTitle>
      <Droppable droppableId="productBacklog">
        {provided => (
          <StyledDropContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {dragItems.map((item, index) => (
              <Draggable
                draggableId={`productBacklogItem-${item.id}`}
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
                      score={item.score}
                    >
                      <div style={{ width: 'fit-content' }}>{item.texts}</div>
                      <StyledBox>x{item.score}</StyledBox>
                    </StyledDragItem>
                  )
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </StyledDropContainer>
        )}
      </Droppable>
    </StyledContainer>
  )
}

export default ProductBacklog
