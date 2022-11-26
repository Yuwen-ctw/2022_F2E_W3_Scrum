import { Droppable, Draggable } from 'react-beautiful-dnd'
import {
  StyledDropContainer,
  StyledDropboxContainer,
  StyledDropbox,
  StyledDragItem,
} from './Dropboxes.styled'
import getDraggingStyle from '../../../utilities/getDraggingStyle'

function Dropboxes({ dragItems }) {
  return (
    <>
      <StyledDropboxContainer>
        <StyledDropbox></StyledDropbox>
        <StyledDropbox></StyledDropbox>
        <StyledDropbox></StyledDropbox>
      </StyledDropboxContainer>
      <Droppable droppableId="exam_goal">
        {provided => (
          <StyledDropContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {dragItems.map((item, index) => (
              <Draggable
                draggableId={`exam-goal-${index}`}
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
    </>
  )
}

export default Dropboxes
