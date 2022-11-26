import ModalBackground from '../../shareStyle/ModalBackground'
import Dialog from '../../shareStyle/Dailog'
import {
  StyledAvatar,
  StyledModalContainer,
  StyledTitle,
  StyledModalButton,
} from './IntroModal.styled'
import { productOwnerAvatar } from '../../../../../assest/images'
import { useState } from 'react'

function IntroModal() {
  const [className, setClassName] = useState('')

  function handleClick() {
    setClassName('d-none')
  }
  return (
    <ModalBackground className={className}>
      <StyledModalContainer>
        <StyledAvatar src={productOwnerAvatar} alt="avatar" />
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
        <StyledTitle>產品負責人</StyledTitle>
        <StyledModalButton onClick={handleClick}>沒問題！</StyledModalButton>
      </StyledModalContainer>
    </ModalBackground>
  )
}

export default IntroModal
