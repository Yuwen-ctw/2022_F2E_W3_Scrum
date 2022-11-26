import { StyledDetail } from './MeetingDetail.styled'
import { flow_tool } from '../../../../../assest/images'

function MeetingDetail({ meeting }) {
  let detail
  switch (meeting) {
    case 'daily':
      detail = <DailyDetail />
      break
    case 'review':
      detail = <ReviewDetail />
      break
    case 'retro':
      detail = <RetroDetail />
      break
    default:
      detail = <DailyDetail />
  }
  return <StyledDetail>{detail}</StyledDetail>
}
export default MeetingDetail

function DailyDetail() {
  return (
    <>
      <p>每天都要進行的會議，以 15 分鐘為限制：</p>
      <div>
        <li>昨天為團隊的短衝目標（Sprint Goal）做了那些進度</li>
        <li>今天我會如何準備來幫助團隊達到短衝目標</li>
        <li>過程中有遇到什麼問題、難題</li>
      </div>
      <p>透過團隊分享，追蹤大家的工作狀況。</p>
    </>
  )
}

function ReviewDetail() {
  return (
    <>
      <p>
        向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。
      </p>
      <p>
        在短衝檢視會議過程中，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。
      </p>
    </>
  )
}

function RetroDetail() {
  return (
    <>
      <p>
        團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方及可以改進的地方。
      </p>
      <p>檢討如何維持已有的成功經驗、優化工作流程，讓團隊運作愈來愈進步。</p>
      <p>
        推薦工具：<span> </span>
        <img src={flow_tool} alt="icon" />
      </p>
    </>
  )
}
