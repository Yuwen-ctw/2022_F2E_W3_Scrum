import { useState } from 'react'
import ModalBackground from '../../shareStyle/ModalBackground'
import {
  StyledModalContainer,
  StyledDialogContainer,
  StyledDialog,
  StyledTitle,
  StyledAvatar,
  StyledModalButton,
} from './PlaningModal.styled'
import {
  productOwnerAvatar,
  developerAvatar,
  scrumMasterAvatar,
} from '../../../../../assest/images'

function PlaningModal() {
  const [className, setClassName] = useState('')

  function handleClick() {
    setClassName('d-none')
  }

  return (
    <>
      <ModalBackground className={className}>
        <StyledModalContainer>
          <DialogContainerPO />
          <DialogContainerSM />
          <DialogContainerDT />
          <StyledModalButton onClick={handleClick}>沒問題！</StyledModalButton>
        </StyledModalContainer>
      </ModalBackground>
    </>
  )
}

export default PlaningModal

function DialogContainerPO() {
  return (
    <StyledDialogContainer>
      <StyledAvatar src={productOwnerAvatar} alt="avatar" />
      <StyledDialog>
        <p>
          產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召開
          <strong>短衝規劃會議（Sprint Planning）</strong>
          。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出
          <strong>短衝待辦清單（Sprint Backlog）</strong>
          ，並由開發團隊在接下來的產品開發週期裡執行。
        </p>
      </StyledDialog>
      <StyledTitle>產品負責人</StyledTitle>
    </StyledDialogContainer>
  )
}

function DialogContainerSM() {
  return (
    <StyledDialogContainer>
      <StyledAvatar src={scrumMasterAvatar} alt="avatar" />
      <StyledDialog>
        <p>
          嗨嗨~你是新來的前端吧！我是這次的 Scrum Master
          XX，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
          Scrum 瞭解。這位是XX，是我們開發團隊的成員唷～
          <br />
          目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以
          <strong>負擔的點數 (Sprint Point) 大約是 20 點左右</strong>。
        </p>
      </StyledDialog>
      <StyledTitle>敏捷教練</StyledTitle>
    </StyledDialogContainer>
  )
}

function DialogContainerDT() {
  return (
    <StyledDialogContainer>
      <StyledAvatar src={developerAvatar} alt="avatar" />
      <StyledDialog>
        <p>
          嘿！新來的，你應該還不知道點數是什麼意思吧?
          <br />
          我來跟你介紹一下吧～ Sprint Point 目的是為了<strong>衡量速度</strong>
          ，是用大概花費的時間預估出的相對點數。
          <br />
          我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！
          (我們平常管理任務是使用 Jira 這套軟體，你有時間記得先去註冊和熟悉唷～)
        </p>
      </StyledDialog>
      <StyledTitle>開發團隊</StyledTitle>
    </StyledDialogContainer>
  )
}
