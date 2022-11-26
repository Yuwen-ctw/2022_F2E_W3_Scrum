import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { stonewall } from '../../../assest/images'
import DropContainer from '../share/DropContainer'
import DragItem from '../share/DragItem'
import Dropbox from '../share/Dropbox'
import DropContainerTitle from '../share/DropContainTitle'

const StyledContainer = styled.div`
  position: relative;
  margin-top: 12px;
  margin-left: auto;
  width: 621px;
  height: 681px;
  background-image: url('${stonewall}');
  background-position: center;
  background-repeat: no-repeat;
`

const StyledTitle = styled(DropContainerTitle)`
  margin-top: 12px;
  color: #524d5b;
`

const StyledDropContainer = styled(DropContainer)`
  height: 444px;
  position: relative;
  margin-top: 65px;
  gap: 20px;
  align-items: center;

  &::after,
  &::before {
    position: absolute;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    opacity: 0.5;
    right: 20px;
    text-align: end;
  }

  &::after {
    content: '優先度 高';
    top: -24px;
    translate: 0 -100%;
  }

  &::before {
    content: '低';
    bottom: -30px;
    translate: 0 100%;
  }
`
const StyledLine = styled.div`
  position: absolute;
  top: 50%;
  right: 33px;
  translate: 0 -50%;
  background: rgba(255, 255, 255);
  height: 105%;
  opacity: 0.5;
  border: 2px solid #ffffff;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -8px;
    width: 12px;
    height: 12px;
    border-width: 4px 4px 0 0;
    border-style: solid;
    border-color: #ffffff;
    rotate: -45deg;
  }
  &::before {
    top: unset;
    bottom: -1px;
    rotate: 135deg;
  }
`
const StyledBlankContainer = styled.div`
  position: absolute;
  display: ${({ showBlank }) => (showBlank ? 'grid' : 'none')};
  width: 100%;
  margin-top: 65px;
  grid-template-columns: 1fr;
  row-gap: 36px;
`
const StyledBlankbox = styled(Dropbox)`
  width: 520px;
  height: 84px;
  justify-self: center;
`

const StyledDragItem = styled(DragItem)`
  width: 520px;
`

function ProductBacklog({ dropboxs }) {
  const showBlank = dropboxs.length === 0 ? true : false
  return (
    <StyledContainer>
      <StyledTitle>
        產品待辦清單<span>Product Backlog</span>
      </StyledTitle>
      <StyledBlankContainer showBlank={showBlank}>
        <StyledBlankbox />
        <StyledBlankbox />
        <StyledBlankbox />
        <StyledBlankbox />
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
                draggableId={`todos-right-${index}`}
                index={index}
                key={index}
              >
                {provided => (
                  <StyledDragItem
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    {item.item}
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
