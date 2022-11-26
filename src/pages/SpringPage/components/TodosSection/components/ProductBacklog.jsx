import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  StyledContainer,
  StyledTitle,
  StyledDropContainer,
  StyledDragItem,
  StyledLine,
  StyledBlankContainer,
  StyledBlankbox,
} from './ProductBacklog.styled'

function ProductBacklog({ dropboxs }) {
  return (
    <StyledContainer>
      <StyledTitle>
        產品待辦清單<span>Product Backlog</span>
      </StyledTitle>
      <StyledBlankContainer>
        {Array.from({ length: 4 }).map((_, index) =>
          index < dropboxs.length ? (
            <div style={{ height: '94px' }} key={index} />
          ) : (
            <StyledBlankbox key={index} />
          )
        )}
      </StyledBlankContainer>
      <Droppable droppableId="backlog">
        {provided => (
          <StyledDropContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <StyledLine />
            {dropboxs.map((item, index) => (
              <Draggable
                draggableId={`todos-right-${item.id}`}
                index={index}
                key={item.id}
              >
                {provided => (
                  <StyledDragItem
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    {item.texts}
                  </StyledDragItem>
                )}
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
