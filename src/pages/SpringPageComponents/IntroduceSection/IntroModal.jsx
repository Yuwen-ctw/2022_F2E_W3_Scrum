import ModalBackground from '../share/ModalBackground'
import Dialog from '../share/Dailog'
import ModalButton from '../share/ModalButton'
import styled from 'styled-components'
import { productOwnerAvatar } from '../../../assest/images'
import { useState } from 'react'

const StyledAvatar = styled.img`
  width: 300px;
`

const StyledModalContainer = styled.div`
  position: absolute;
  top: 340px;
  left: 50%;
  translate: -50% 0;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto;
  align-items: center;
  column-gap: 112px;
`
const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #ffffff;
`
const StyledModalButton = styled(ModalButton)`
  position: absolute;
  right: 0px;
  bottom: -64px;
`

function IntroModal() {
  const [className, setClassName] = useState('')

  function handleClick() {
    setClassName('d-none')
  }
  return (
    <ModalBackground className={className}>
      <StyledModalContainer>
        <StyledAvatar src={productOwnerAvatar} alt="avatar" />
        <StyledDialog />
        <StyledTitle>產品負責人</StyledTitle>
        <StyledModalButton onClick={handleClick}>沒問題！</StyledModalButton>
      </StyledModalContainer>
    </ModalBackground>
  )
}

export default IntroModal

function StyledDialog() {
  return (
    <Dialog width={'762px'}>
      <p>我是 TT 資訊，開發 A 組的 PO，小敏。</p>
      <p>PO 也就是產品負責人（Product Owner）。</p>
      <p>
        產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出
        <strong>產品待辦清單（Product Backlog）唷！</strong>
      </p>
      <p>
        剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
      </p>
    </Dialog>
  )
}
