import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DropContainerTitle from '../share/DropContainTitle'
import DropContainer from '../share/DropContainer'
import Dropbox from '../share/Dropbox'
import DragItem from '../share/DragItem'
import { whiteBox, redBox } from '../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 36px;
`
const StyledTitle = styled(DropContainerTitle)`
  color: var(--SecondDarkL);
  line-height: 78px;
`

const StyledDropContainer = styled(DropContainer)`
  height: 516px;
  justify-content: flex-start;
  gap: 32px;
  padding-top: 6px;
  width: 530px;
`

const StyledBlankContainer = styled.div`
  position: absolute;
  display: ${({ showBlank }) => (showBlank ? 'grid' : 'none')};
  width: 100%;
  grid-template-columns: 1fr;
  row-gap: 36px;
`

const StyledBlankbox = styled(Dropbox)`
  width: 520px;
  height: 84px;
`

const StyledBoxContainer = styled.div`
  position: relative;
  height: 96px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 24px);
  grid-template-rows: 28px 28px;
  column-gap: 8px;
  row-gap: 8px;
  &::after {
    position: absolute;
    bottom: 0px;
    content: '點數超過了唷~再試著調整一下!';
    font-weight: 700;
    color: ${({ score }) => (score > 20 ? '#e8433f' : 'transparent')};
  }
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
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  width: 585px;
  background: rgba(128, 199, 79, 0.85);
  color: #ffffff;
`

function generateBox(score) {
  const box = Array.from({ length: score })
  return box.map((_, index) => (
    <img src={index < 20 ? whiteBox : redBox} key={index} alt={box} />
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
                draggableId={`springBacklogItem-${index}`}
                index={index}
                key={index}
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
                        <div style={{ width: 'fit-content' }}>{item.item}</div>
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
