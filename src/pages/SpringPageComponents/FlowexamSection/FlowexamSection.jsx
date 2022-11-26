import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { useState, useEffect } from 'react'
import ExamIntro from './ExamIntro'
import ExamHint from './ExamHint'
import DragItems from './DragItems'
import Dropboxes from './Dropboxes'
import { flowexam_bg, flowexam_mainArrowBg } from '../../../assest/images'

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`
const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    var(--SecondDarkT) 0px,
    var(--SecondDarkT) 72px,
    transparent 72px,
    transparent 100%
  );
`
const StyledArrowBG = styled.img`
  width: 100%;
  position: absolute;
  bottom: 72px;
`
const StyledSpring = styled.h1`
  position: absolute;
  top: 500px;
  left: 369px;
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  color: #ffffff;
`

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
