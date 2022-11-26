import { createContext } from 'react'

const DragContent_login = () => <>會員系統(登入、註冊、管理)</>
const DragContent_editor = () => <>應徵者的線上履歷編輯器</>
const DragContent_frontend = () => (
  <>
    前台職缺列表
    <br />
    <span>（缺詳細內容、點選可發送應徵意願）</span>
  </>
)
const DragContent_backend = () => (
  <>
    後台職缺管理功能
    <br />
    <span>（資訊上架、下架、顯示應徵者資料）</span>
  </>
)

const TodosContext = createContext([
  { texts: DragContent_login(), id: 'login', score: 8 },
  { texts: DragContent_editor(), id: 'editor', score: 13 },
  { texts: DragContent_frontend(), id: 'fe', score: 5 },
  { texts: DragContent_backend(), id: 'be', score: 5 },
])

export default TodosContext
