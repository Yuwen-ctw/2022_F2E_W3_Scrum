import { useEffect, useState, useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { TaskIntro, Todos, ProductBacklog } from './components'
import { StyledBG, StyledContainer } from './TodoSection.styled'
import { todos_bg } from '../../../../assest/images'
import TodosContext from '../../data/TodosContext'

function TodosSection({ onAchieve }) {
  // disable the forward button first
  useEffect(() => onAchieve(false), [])
  const todosContext = useContext(TodosContext)
  // copy data
  const [items, setItems] = useState({
    todos: [...todosContext],
    backlog: [],
  })

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
    // check achieve state
    if (nextDrags.backlog.length === 4) onAchieve(true)
    else onAchieve(false)
  }

  return (
    <>
      <TaskIntro />
      <StyledContainer>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Todos dragItems={items.todos} />
          <ProductBacklog dropboxs={items.backlog} />
        </DragDropContext>
      </StyledContainer>
      <StyledBG src={todos_bg} alt="beach" />
    </>
  )
}
export default TodosSection
