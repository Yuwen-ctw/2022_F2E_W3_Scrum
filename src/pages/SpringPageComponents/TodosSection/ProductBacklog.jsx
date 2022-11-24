import styled from 'styled-components'
import { stonewall } from '../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 12px;
  margin-left: auto;
  width: 621px;
  height: 681px;
  background-image: url('${stonewall}');
  background-position: center;
  // background-size: cover;
  background-repeat: no-repeat;
`

const StyledTitle = styled.h3`
  margin-top: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #524d5b;
  span {
    font-size: 32px;
  }
`

const StyledItemContainer = styled.ul`
  position: relative;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;

  &::after,
  &::before {
    position: absolute;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    opacity: 0.5;
    right: 20px;
    text-align: end;
  }

  &::after {
    content: '優先度 高';
    top: -24px;
    translate: 0 -100%;
  }

  &::before {
    content: '低';
    bottom: -30px;
    translate: 0 100%;
  }
`
const StyledLine = styled.div`
  position: absolute;
  top: 50%;
  right: 33px;
  translate: 0 -50%;
  background: rgba(255, 255, 255);
  height: 105%;
  opacity: 0.5;
  border: 2px solid #ffffff;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -8px;
    width: 12px;
    height: 12px;
    border-width: 4px 4px 0 0;
    border-style: solid;
    border-color: #ffffff;
    rotate: -45deg;
  }
  &::before {
    top: unset;
    bottom: -1px;
    rotate: 135deg;
  }
`

const StyledItem = styled.li`
  width: 520px;
  height: 84px;
  border: 3px dashed #ffffff;
  border-radius: 12px;
`
// const StyledItem = styled.li`
//   max-width: 520px;
//   padding: 24px 36px;
//   border-radius: 12px;
//   background: rgba(255, 255, 255, 0.75);
//   box-shadow: 9px 10px 0 0 rgba(71, 52, 56, 0.75);
//   font-weight: 700;
//   font-size: 32px;
//   line-height: 36px;
//   text-align: center;
//   color: var(--SecondDarkL);
//   cursor: grab;

//   &:nth-child(even) {
//     margin-left: 60px;
//   }

//   span {
//     font-size: 24px;
//   }
// `

function ProductBacklog() {
  return (
    <StyledContainer>
      <StyledTitle>
        產品待辦清單<span>Product Backlog</span>
      </StyledTitle>
      <StyledItemContainer>
        <StyledLine />
        <StyledItem></StyledItem>
        <StyledItem></StyledItem>
        <StyledItem></StyledItem>
        <StyledItem></StyledItem>
      </StyledItemContainer>
    </StyledContainer>
  )
}

export default ProductBacklog