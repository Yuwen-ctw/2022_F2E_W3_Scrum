import { DragDropContext } from 'react-beautiful-dnd'
import { useState, useEffect } from 'react'
import { DragItems, Dropboxes, ExamHint, ExamIntro } from './components'
import { flowexam_bg, flowexam_mainArrowBg } from '../../../../assest/images'
import {
  StyledContainer,
  StyledBG,
  StyledArrowBG,
  StyledSpring,
} from './FlowexamSection.styled'

function FlowexamSection({ onAchieve }) {
  const [isWrong, setIsWrong] = useState(false)
  const [items, setItems] = useState({
    exam_init: [
      { name: '每日站立會議', en_name: 'Daily Scrum', priority: 0 },
      { name: '短衝檢視會議', en_name: 'Spring Review', priority: 1 },
      { name: '短衝自省會議', en_name: 'Spring Retrospective', priority: 2 },
    ],
    exam_goal: [],
  })
  // disable the forward button first
  useEffect(() => onAchieve(false), [])

  function validAnswer(items) {
    // check achieve state
    return (
      // if all item was moved out
      items.exam_init.length === 0 &&
      // if priority is ascending
      items.exam_goal.every((item, index) => {
        return item.priority === index
      })
    )
  }

  function handleDragEnd(e) {
    // get information
    const { source, destination } = e
    if (!destination) return
    // copy array
    const nextDrags = { ...items }
    // remove the drag item from source
    const [moveItem] = nextDrags[source.droppableId].splice(source.index, 1)
    // add the drag item to destination
    nextDrags[destination.droppableId].splice(destination.index, 0, moveItem)
    // update state
    setItems(nextDrags)

    const result = validAnswer(nextDrags)
    if (result) onAchieve(true)
    else onAchieve(false)
    setIsWrong(!result)
  }
  return (
    <>
      <StyledContainer>
        <ExamIntro isWrong={isWrong} />
        <ExamHint />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Dropboxes dragItems={items.exam_goal} />
          <DragItems dragItems={items.exam_init} />
        </DragDropContext>
      </StyledContainer>
      <StyledSpring>Sprint</StyledSpring>
      <StyledBG src={flowexam_bg} alt="background" />
      <StyledArrowBG src={flowexam_mainArrowBg} alt="background" />
    </>
  )
}

export default FlowexamSection
