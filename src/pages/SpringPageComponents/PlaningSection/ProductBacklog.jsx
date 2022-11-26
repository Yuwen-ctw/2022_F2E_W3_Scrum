import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DropContainerTitle from '../share/DropContainTitle'
import DropContainer from '../share/DropContainer'
import DragItem from '../share/DragItem'
import { whiteBox } from '../../../assest/images'
const StyledContainer = styled.div`
  margin-top: 36px;
`
const StyledTitle = styled(DropContainerTitle)`
  color: var(--SecondDarkL);
`

const StyledDropContainer = styled(DropContainer)`
  margin-top: 96px;
  gap: 32px;
  height: 550px;
  width: 534px;
`

const StyledBox = styled.div`
  padding-left: 32px;
  height: 36px;
  background-image: url('${whiteBox}');
  background-position: left center;
  background-repeat: no-repeat;
  text-align: end;
`

const StyledDragItem = styled(DragItem)`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  position: relative;
  width: 585px;
  background: rgba(128, 199, 79, 0.85);
  color: #ffffff;
`
function ProductBacklog({ dragItems }) {
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
                draggableId={`productBacklogItem-${index}`}
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
                      score={item.score}
                    >
                      <div style={{ width: 'fit-content' }}>{item.item}</div>
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
