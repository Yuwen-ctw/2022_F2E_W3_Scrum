import { StyledRoleCard } from './RoleCard.styled'
import {
  developer,
  productOwner,
  scrumMaster,
} from '../../../../../assest/images'

function RoleCard({ role }) {
  let src
  let title
  let enTitle
  let detail

  switch (role) {
    case 'productOwner':
      src = productOwner
      title = '產品負責人'
      enTitle = 'Product Owner'
      detail =
        '產品方向及願景，定義產品細節、優先級別、交付時間，清楚的表達及排序產品待辦事項。'
      break
    case 'scrumMaster':
      src = scrumMaster
      title = '敏捷教練'
      enTitle = 'Scrum Master'
      detail =
        '確保開發團隊遵循Scrum的價值觀，使團隊能正確且合理地運作。教育組織內部，幫助團隊理解Scrum。'
      break
    case 'developer':
      src = developer
      title = '開發團隊'
      enTitle = 'Development Team'
      detail =
        '負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。'
      break
    default:
  }

  return (
    <StyledRoleCard>
      <img className="role__img" src={src} alt={enTitle} />
      <h2 className="role__title">{title}</h2>
      <h3 className="role__en-title">{enTitle}</h3>
      <p className="role__detail">{detail}</p>
    </StyledRoleCard>
  )
}

export default RoleCard
