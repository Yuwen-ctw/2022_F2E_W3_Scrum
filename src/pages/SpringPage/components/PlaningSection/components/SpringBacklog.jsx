import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  StyledContainer,
  StyledTitle,
  StyledDropContainer,
  StyledBlankContainer,
  StyledBlankbox,
  StyledBoxContainer,
  StyledBox,
  StyledDragItem,
  StyledSquare,
} from './SpringBacklog.styled'
import { whiteBox, redBox } from '../../../../../assest/images'

function generateBox(score) {
  const box = Array.from({ length: score })
  return box.map((_, index) => (
    <StyledSquare
      src={index < 20 ? whiteBox : redBox}
      key={index}
      alt="box"
      id={index}
    />
  ))
}

function SpringBacklog({ dragItems, score }) {
  const showBlank = dragItems.length === 0 ? true : false

  return (
    <StyledContainer>
      <StyledTitle>開發 A 組的短衝待辦清單</StyledTitle>
      <StyledBoxContainer score={score}>
        {generateBox(score)}
      </StyledBoxContainer>

      <StyledBlankContainer showBlank={showBlank}>
        <StyledBlankbox />
        <StyledBlankbox />
        <StyledBlankbox />
        <StyledBlankbox />
      </StyledBlankContainer>
      <Droppable droppableId="springBacklog">
        {provided => (
          <StyledDropContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {dragItems.map((item, index) => (
              <Draggable
                draggableId={`springBacklogItem-${item.id}`}
                index={index}
                key={item.id}
              >
                {provided => {
                  return (
                    <div
                      style={{
                        position: 'relative',
                        width: '530px',
                        height: '110px',
                      }}
                    >
                      <StyledDragItem
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        score={item.score}
                      >
                        <div style={{ width: 'fit-content' }}>{item.texts}</div>
                        <StyledBox>x{item.score}</StyledBox>
                      </StyledDragItem>
                    </div>
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
export default SpringBacklog
